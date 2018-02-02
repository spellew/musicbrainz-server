// Copyright (C) 2018 Shamroy Pellew
//
// This file is part of MusicBrainz, the open internet music database,
// and is licensed under the GPL version 2, or (at your option) any
// later version: http://www.gnu.org/licenses/gpl-2.0.txt

const React = require('react');
const Layout = require('./Layout');
const {l} = require('../static/scripts/common/i18n');

const formatPercentage = (n) => {
  return n.toLocaleString($c.stash.current_language,
    {style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2});
}

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

const Formats = () => {
  const stats = $c.stash.stats,
    format_stats = $c.stash.format_stats;
  return (
    <Layout title={l('Release/Medium Formats')} fullWidth={true} page='formats'>
      <div>
        <p>{l('Last updated: {date}', 
          {__react: true, date: stats.date_collected})}</p>
        <h2>{l('Release/Medium Formats')}</h2>
        <table className='tbl'>
          <thead>
            <tr>
              <th className='pos'>{l('Rank')}</th>
              <th>{l('Format')}</th>
              <th>{l('Releases')}</th>
              <th>{l('% of total releases')}</th>
              <th>{l('Mediums')}</th>
              <th>{l('% of total mediums')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>{l('Total')}</td>
              <td className='t'>{formatCount(stats.data['count.release'])}</td>
              <td className='t'>{l('100%')}</td>
              <td className='t'>{formatCount(stats.data['count.medium'])}</td>
              <td className='t'>{l('100%')}</td>
            </tr>
            {format_stats.map((format_stat, i) => (
              <tr className={(i + 1) % 2 === 0 ? 'even' : 'odd'}> 
                <td className='t'>{i + 1}</td>
                <td>{format_stat.entity ? <LinkSearchableProperty searchField='format' searchValue={format_stat.entity.name.replace('"', '\\"')} entityType="release" text={l(format_stat.entity.name)} /> : l('Unknown Format')}</td>
                <td className='t'>{formatCount(format_stat.release_count)}</td>
                <td className='t'>{formatPercentage(format_stat.release_count/stats.data['count.release'])}</td>
                <td className='t'>{formatCount(format_stat.medium_count)}</td>
                <td className='t'>{formatPercentage(format_stat.medium_count/stats.data['count.medium'])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

module.exports = Formats;
