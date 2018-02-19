/*
 * Copyright (C) 2018 Shamroy Pellew
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

const React = require('react');
const Layout = require('./Layout');
const {l} = require('../static/scripts/common/i18n');

const EditorStats = ({dataPoints, tableLabel, editorLabel, countLabel}) => (
  [
    <h3 key={countLabel}>{tableLabel}</h3>,
    <table className="tbl" key={tableLabel}>
      <thead>
        <tr>
          <th className="pos">{l('Rank')}</th>
          <th>{editorLabel}</th>
          <th>{countLabel}</th>
        </tr>
      </thead>
      <tbody>
        {JSON.stringify(dataPoints)}
      </tbody>
    </table>,
  ]
);

const Editors = () => {
  return (
    <Layout fullWidth page="editors" title={l('Editors')}>
      {/* [%- PROCESS "statistics/macros-header.tt" -%] */}
      <p>{l('Last updated: {date}',
        {__react: true, date: $c.stash.stats.date_collected})}
      </p>

      <p>{l('For the vote statistics, only yes or no votes are counted, abstain votes are not counted.')}</p>

      <div style={{display: 'inline-block', float: 'left', marginRight: 50}}>
        <h2 style={{marginTop: 0}}>{l('Editors')}</h2>
        <EditorStats countLabel={l('Open and applied edits in past week')} dataPoints={$c.stash.top_recently_active_editors} editorLabel={l('Editor')} tableLabel={l('Most active editors in the past week')} />
        <EditorStats countLabel={l('Total applied edits')} dataPoints={$c.stash.top_editors} editorLabel={l('Editor')} tableLabel={l('Top editors overall')} />
      </div>

      <div style={{display: 'inline-block', float: 'left', marginRight: 50}}>
        <h2 style={{marginTop: 0}}>{l('Voters')}</h2>
        <EditorStats countLabel={l('Votes in past week')} dataPoints={$c.stash.top_recently_active_voters} editorLabel={l('Voter')} tableLabel={l('Most active voters in the past week')} />
        <EditorStats countLabel={l('Total votes')} dataPoints={$c.stash.top_voters} editorLabel={l('Voter')} tableLabel={l('Top voters overall')} />
      </div>
      {/* [%- PROCESS "statistics/macros-footer.tt" -%] */}
    </Layout>
  );
};

module.exports = Editors;