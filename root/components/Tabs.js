// Copyright (C) 2018 Shamroy Pellew
//
// This file is part of MusicBrainz, the open internet music database,
// and is licensed under the GPL version 2, or (at your option) any
// later version: http://www.gnu.org/licenses/gpl-2.0.txt

const React = require('react');

const Tabs = (props) => (
  <div className="tabs">
    <ul className="tabs">
      {props.list.map((link) => link
        ? <li className={link[0] === props.sel ? "sel" : ""}>{link[1]}</li>
        : null)}
    </ul>
  </div>
);

module.exports = Tabs;
