// Copyright (C) 2018 Shamroy Pellew
//
// This file is part of MusicBrainz, the open internet music database,
// and is licensed under the GPL version 2, or (at your option) any
// later version: http://www.gnu.org/licenses/gpl-2.0.txt

const React = require('react');

const manifest = require('../static/manifest');
const {l} = require('../static/scripts/common/i18n');
const Layout = require('./Layout');

const formatCount = (n) => {
  return n.toLocaleString($c.stash.current_language);
}

const LinkSearchableProperty = ({searchField, searchValue, entityType, text}) => {
  const params = {query: searchField + ':\"' + searchValue + '\"', type: entityType, limit: 25, method: 'advanced'};
  return (
    <a href={'/search?' + Object.keys(params).map(key => key + '=' + params[key]).join('&')}>
      {text ? text : searchValue}
    </a>
  );
};

class LanguagesScripts extends React.Component {
  componentDidMount = () => {
    // $('#languages-table').tablesorter({
    //   widgets: [ 'indexFirstColumn', 'evenRowClasses' ],
    //   headers: { 0: {sorter: false}, 2: { sorter: 'fancyNumber' }, 3: { sorter: 'fancyNumber' }, 4: { sorter: 'fancyNumber' } },
    //   sortList: [ [4,1], [1,0] ] // order by descending number of entities, then name
    // });
    // $('#scripts-table').tablesorter({
    //     widgets: [ 'indexFirstColumn', 'evenRowClasses' ],
    //     headers: { 0: {sorter: false}, 2: { sorter: 'fancyNumber' } },
    //     sortList: [ [2,1], [1,0] ] // order by descending number of entities, then name
    // });
  }
  render() {
    return (
      <Layout title={l('Languages and Scripts')} fullWidth={true} page='languages-scripts'>
        {/* [%- PROCESS "statistics/macros-header.tt" -%] */}
        <div>
          <p>{l('Last updated: {date}', 
            { __react: true, date: $c.stash.date_collected })}</p>
          <p>{l('All other available languages and scripts have 0 releases and works.')}</p>
          <div style={{float: "left", display: "inline-block", marginRight: "50px"}}>
            <h2 style={{marginTop: 0}}>{l('Languages')}</h2>
            <table className='tbl' id='languages-table'>
              <thead>
                <tr>
                  <th className='pos'>{l('Rank')}</th>
                  <th>{l('Languages')}<div className="arrow"></div></th>
                  <th>{l('Releases')}<div className="arrow"></div></th>
                  <th>{l('Works')}<div className="arrow"></div></th>
                  <th>{l('Total')}<div className="arrow"></div></th>
                </tr>
              </thead>
              <tbody>
                {$c.stash.language_stats.map((language, i) => (
                  // [% NEXT IF language.count == 0 %]
                  <tr className={(i + 1) % 2 === 0 ? 'even' : 'odd'}> 
                    <td className='t'>{i + 1}</td>
                    <td>{language.entity ? l(language.entity.name) : l('Unknown language')}</td>
                    <td className="t"><LinkSearchableProperty searchField='lang' searchValue={language.entity.iso_code_3 || 'unknown'} entityType='release' text={formatCount(language.releases)} /></td>
                    <td className="t"><LinkSearchableProperty searchField='lang' searchValue={language.entity.iso_code_3 || 'unknown'} entityType='work' text={formatCount(language.works)} /></td>
                    <td className="t">{formatCount(language.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{float: "left", display: "inline-block"}}>
            <h2 style={{marginTop: 0}}>{l('Scripts')}</h2>
            <table className='tbl' id='scripts-table'>
              <thead>
                <tr>
                  <th className='pos'>{l('Rank')}</th>
                  <th>{l('Script')}<div className="arrow"></div></th>
                  <th>{l('Releases')}<div className="arrow"></div></th>
                </tr>
              </thead>
              <tbody>
                {$c.stash.script_stats.map((script, i) => (
                  // [% NEXT IF script.count == 0 %]
                  <tr className={(i + 1) % 2 === 0 ? 'even' : 'odd'}> 
                    <td className='t'>{i + 1}</td>
                    <td>{script.entity ? l(script.entity.name) : l('Unknown script')}</td>
                    <td className="t"><LinkSearchableProperty searchField='script' searchValue={script.entity ? script.entity.iso_code[0] : 'unknown'} entityType='release' text={formatCount(script.count)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* [%- PROCESS "statistics/macros-footer.tt" -%] */}
          {manifest.js('statistics')}
        </div>
      </Layout>
    );
  }
};

module.exports = LanguagesScripts;
