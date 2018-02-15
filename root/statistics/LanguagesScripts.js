/*
 * Copyright (C) 2018 Shamroy Pellew
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

const React = require('react');
const manifest = require('../static/manifest');
const {l} = require('../static/scripts/common/i18n');
const Layout = require('./Layout');

const formatCount = (n) => {
  return n.toLocaleString($c.stash.current_language);
};

const LinkSearchableProperty = ({
  searchField,
  searchValue,
  entityType,
  text,
}) => {
  const params = {limit: 25, method: 'advanced', query: searchField + ':\"' + searchValue + '\"', type: entityType};
  return (
    <a href={'/search?' + Object.keys(params).map(key => key + '=' + params[key]).join('&')}>
      {text ? text : searchValue}
    </a>
  );
};

const LanguagesScripts = () => (
  <Layout fullWidth page="languages-scripts" title={l('Languages and Scripts')}>
    {/* [%- PROCESS "statistics/macros-header.tt" -%] */}
    <p>{l('Last updated: {date}',
      {__react: true, date: $c.stash.date_collected})}
    </p>
    <p>{l('All other available languages and scripts have 0 releases and works.')}</p>
    <div style={{display: 'inline-block', float: 'left', marginRight: '50px'}}>
      <h2 style={{marginTop: 0}}>{l('Languages')}</h2>
      <table className="tbl" id="languages-table">
        <thead>
          <tr>
            <th className="pos">{l('Rank')}</th>
            <th>{l('Languages')}<div className="arrow" /></th>
            <th>{l('Releases')}<div className="arrow" /></th>
            <th>{l('Works')}<div className="arrow" /></th>
            <th>{l('Total')}<div className="arrow" /></th>
          </tr>
        </thead>
        <tbody>
          {$c.stash.language_stats.map((languageStat, i) => (
            <tr className={(i + 1) % 2 === 0 ? 'even' : 'odd'} key={languageStat.medium_stat}>
              <td className="t">{i + 1}</td>
              <td>{languageStat.entity ? l(languageStat.entity.name) : l('Unknown language')}</td>
              <td className="t"><LinkSearchableProperty entityType="release" searchField="lang" searchValue={languageStat.entity.iso_code_3 || 'unknown'} text={formatCount(languageStat.releases)} /></td>
              <td className="t"><LinkSearchableProperty entityType="work" searchField="lang" searchValue={languageStat.entity.iso_code_3 || 'unknown'} text={formatCount(languageStat.works)} /></td>
              <td className="t">{formatCount(languageStat.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div style={{display: 'inline-block', float: 'left'}}>
      <h2 style={{marginTop: 0}}>{l('Scripts')}</h2>
      <table className="tbl" id="scripts-table">
        <thead>
          <tr>
            <th className="pos">{l('Rank')}</th>
            <th>{l('Script')}<div className="arrow" /></th>
            <th>{l('Releases')}<div className="arrow" /></th>
          </tr>
        </thead>
        <tbody>
          {$c.stash.script_stats.map((scriptStat, i) => (
            <tr className={(i + 1) % 2 === 0 ? 'even' : 'odd'} key={scriptStat.medium_stat}>
              <td className="t">{i + 1}</td>
              <td>{scriptStat.entity ? l(scriptStat.entity.name) : l('Unknown script')}</td>
              <td className="t"><LinkSearchableProperty entityType="release" searchField="script" searchValue={scriptStat.entity ? scriptStat.entity.iso_code[0] : 'unknown'} text={formatCount(scriptStat.count)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* [%- PROCESS "statistics/macros-footer.tt" -%] */}
    {manifest.js('statistics')}
  </Layout>
);

module.exports = LanguagesScripts;
