// Copyright (C) 2018 Shamroy Pellew
//
// This file is part of MusicBrainz, the open internet music database,
// and is licensed under the GPL version 2, or (at your option) any
// later version: http://www.gnu.org/licenses/gpl-2.0.txt

const React = require('react');
const Layout = require('../layout');
const EntityLink = require('../static/scripts/common/components/EntityLink');
const {l, ln} = require('../static/scripts/common/i18n');

const Index = () => {
  const iswc = $c.stash.iswc,
    works = $c.stash.works,
    user = $c.user_exists;
  return (
    <Layout title={l('ISWC “{iswc}”', { iswc: iswc.iswc })} fullWidth={true}>
      <h1>
        {l('ISWC “{iswc}”',
          {__react: true, iswc: <EntityLink entity={iswc} />})}
      </h1>
      <h2>
        {ln('Associated with {num} work', 'Associated with {num} works',
          works.length, { num: works.length })}
      </h2>
      <form action="/work/merge_queue" method="post">
        <table className="tbl">
          <thead>
            <tr>
              {user ? (
                <th style={{width: "1em"}}>
                  <input type="checkbox" />
                </th>
              ) : null}
              <th>{l('Title')}</th>
              <th>{l('Writers')}</th>
              <th>{l('Artists')}</th>
              <th>{l('Type')}</th>
              <th>{l('Lyrics Language')}</th>
            </tr>
          </thead>
          <tbody>
            {works.map((work, i) => (
              <tr className={(i + 1) % 2 === 0 ? "even" : "odd"}>
                {user ? (
                  <td>
                    <input type="checkbox" name="add-to-merge"
                      value={work.id} />
                  </td>
                ) : null}
                <td><EntityLink entity={work} /></td>
                <td><ArtistCreditLink artistCredit={work.writers} />)}</td>
                <td><ArtistCreditLink artistCredit={work.writers} />)}</td>
                <td>{work.typeName}</td>
                {/* <td>{work.typeName}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
        {user ? (<div className="row">
          <span className="buttons">
            <button type="submit">{l('Add selected works for merging')}</button>
          </span>
        </div>) : null}
      </form>
    </Layout>
  );
};

module.exports = Index;