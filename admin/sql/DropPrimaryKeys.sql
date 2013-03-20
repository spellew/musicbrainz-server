-- Automatically generated, do not edit.
\unset ON_ERROR_STOP

ALTER TABLE annotation DROP CONSTRAINT annotation_pkey;
ALTER TABLE application DROP CONSTRAINT application_pkey;
ALTER TABLE artist DROP CONSTRAINT artist_pkey;
ALTER TABLE artist_alias DROP CONSTRAINT artist_alias_pkey;
ALTER TABLE artist_alias_type DROP CONSTRAINT artist_alias_type_pkey;
ALTER TABLE artist_annotation DROP CONSTRAINT artist_annotation_pkey;
ALTER TABLE artist_credit DROP CONSTRAINT artist_credit_pkey;
ALTER TABLE artist_credit_name DROP CONSTRAINT artist_credit_name_pkey;
ALTER TABLE artist_gid_redirect DROP CONSTRAINT artist_gid_redirect_pkey;
ALTER TABLE artist_ipi DROP CONSTRAINT artist_ipi_pkey;
ALTER TABLE artist_meta DROP CONSTRAINT artist_meta_pkey;
ALTER TABLE artist_name DROP CONSTRAINT artist_name_pkey;
ALTER TABLE artist_rating_raw DROP CONSTRAINT artist_rating_raw_pkey;
ALTER TABLE artist_tag DROP CONSTRAINT artist_tag_pkey;
ALTER TABLE artist_tag_raw DROP CONSTRAINT artist_tag_raw_pkey;
ALTER TABLE artist_type DROP CONSTRAINT artist_type_pkey;
ALTER TABLE autoeditor_election DROP CONSTRAINT autoeditor_election_pkey;
ALTER TABLE autoeditor_election_vote DROP CONSTRAINT autoeditor_election_vote_pkey;
ALTER TABLE cdtoc DROP CONSTRAINT cdtoc_pkey;
ALTER TABLE cdtoc_raw DROP CONSTRAINT cdtoc_raw_pkey;
ALTER TABLE clientversion DROP CONSTRAINT clientversion_pkey;
ALTER TABLE country DROP CONSTRAINT country_pkey;
ALTER TABLE edit DROP CONSTRAINT edit_pkey;
ALTER TABLE edit_artist DROP CONSTRAINT edit_artist_pkey;
ALTER TABLE edit_label DROP CONSTRAINT edit_label_pkey;
ALTER TABLE edit_note DROP CONSTRAINT edit_note_pkey;
ALTER TABLE edit_recording DROP CONSTRAINT edit_recording_pkey;
ALTER TABLE edit_release DROP CONSTRAINT edit_release_pkey;
ALTER TABLE edit_release_group DROP CONSTRAINT edit_release_group_pkey;
ALTER TABLE edit_url DROP CONSTRAINT edit_url_pkey;
ALTER TABLE edit_work DROP CONSTRAINT edit_work_pkey;
ALTER TABLE edit_work_attribute DROP CONSTRAINT edit_work_attribute_pkey;
ALTER TABLE editor DROP CONSTRAINT editor_pkey;
ALTER TABLE editor_collection DROP CONSTRAINT editor_collection_pkey;
ALTER TABLE editor_collection_release DROP CONSTRAINT editor_collection_release_pkey;
ALTER TABLE editor_language DROP CONSTRAINT editor_language_pkey;
ALTER TABLE editor_oauth_token DROP CONSTRAINT editor_oauth_token_pkey;
ALTER TABLE editor_preference DROP CONSTRAINT editor_preference_pkey;
ALTER TABLE editor_subscribe_artist DROP CONSTRAINT editor_subscribe_artist_pkey;
ALTER TABLE editor_subscribe_editor DROP CONSTRAINT editor_subscribe_editor_pkey;
ALTER TABLE editor_subscribe_label DROP CONSTRAINT editor_subscribe_label_pkey;
ALTER TABLE editor_watch_artist DROP CONSTRAINT editor_watch_artist_pkey;
ALTER TABLE editor_watch_preferences DROP CONSTRAINT editor_watch_preferences_pkey;
ALTER TABLE editor_watch_release_group_type DROP CONSTRAINT editor_watch_release_group_type_pkey;
ALTER TABLE editor_watch_release_status DROP CONSTRAINT editor_watch_release_status_pkey;
ALTER TABLE gender DROP CONSTRAINT gender_pkey;
ALTER TABLE isrc DROP CONSTRAINT isrc_pkey;
ALTER TABLE iswc DROP CONSTRAINT iswc_pkey;
ALTER TABLE l_artist_artist DROP CONSTRAINT l_artist_artist_pkey;
ALTER TABLE l_artist_label DROP CONSTRAINT l_artist_label_pkey;
ALTER TABLE l_artist_recording DROP CONSTRAINT l_artist_recording_pkey;
ALTER TABLE l_artist_release DROP CONSTRAINT l_artist_release_pkey;
ALTER TABLE l_artist_release_group DROP CONSTRAINT l_artist_release_group_pkey;
ALTER TABLE l_artist_url DROP CONSTRAINT l_artist_url_pkey;
ALTER TABLE l_artist_work DROP CONSTRAINT l_artist_work_pkey;
ALTER TABLE l_label_label DROP CONSTRAINT l_label_label_pkey;
ALTER TABLE l_label_recording DROP CONSTRAINT l_label_recording_pkey;
ALTER TABLE l_label_release DROP CONSTRAINT l_label_release_pkey;
ALTER TABLE l_label_release_group DROP CONSTRAINT l_label_release_group_pkey;
ALTER TABLE l_label_url DROP CONSTRAINT l_label_url_pkey;
ALTER TABLE l_label_work DROP CONSTRAINT l_label_work_pkey;
ALTER TABLE l_recording_recording DROP CONSTRAINT l_recording_recording_pkey;
ALTER TABLE l_recording_release DROP CONSTRAINT l_recording_release_pkey;
ALTER TABLE l_recording_release_group DROP CONSTRAINT l_recording_release_group_pkey;
ALTER TABLE l_recording_url DROP CONSTRAINT l_recording_url_pkey;
ALTER TABLE l_recording_work DROP CONSTRAINT l_recording_work_pkey;
ALTER TABLE l_release_group_release_group DROP CONSTRAINT l_release_group_release_group_pkey;
ALTER TABLE l_release_group_url DROP CONSTRAINT l_release_group_url_pkey;
ALTER TABLE l_release_group_work DROP CONSTRAINT l_release_group_work_pkey;
ALTER TABLE l_release_release DROP CONSTRAINT l_release_release_pkey;
ALTER TABLE l_release_release_group DROP CONSTRAINT l_release_release_group_pkey;
ALTER TABLE l_release_url DROP CONSTRAINT l_release_url_pkey;
ALTER TABLE l_release_work DROP CONSTRAINT l_release_work_pkey;
ALTER TABLE l_url_url DROP CONSTRAINT l_url_url_pkey;
ALTER TABLE l_url_work DROP CONSTRAINT l_url_work_pkey;
ALTER TABLE l_work_work DROP CONSTRAINT l_work_work_pkey;
ALTER TABLE label DROP CONSTRAINT label_pkey;
ALTER TABLE label_alias DROP CONSTRAINT label_alias_pkey;
ALTER TABLE label_alias_type DROP CONSTRAINT label_alias_type_pkey;
ALTER TABLE label_annotation DROP CONSTRAINT label_annotation_pkey;
ALTER TABLE label_gid_redirect DROP CONSTRAINT label_gid_redirect_pkey;
ALTER TABLE label_ipi DROP CONSTRAINT label_ipi_pkey;
ALTER TABLE label_meta DROP CONSTRAINT label_meta_pkey;
ALTER TABLE label_name DROP CONSTRAINT label_name_pkey;
ALTER TABLE label_rating_raw DROP CONSTRAINT label_rating_raw_pkey;
ALTER TABLE label_tag DROP CONSTRAINT label_tag_pkey;
ALTER TABLE label_tag_raw DROP CONSTRAINT label_tag_raw_pkey;
ALTER TABLE label_type DROP CONSTRAINT label_type_pkey;
ALTER TABLE language DROP CONSTRAINT language_pkey;
ALTER TABLE link DROP CONSTRAINT link_pkey;
ALTER TABLE link_attribute DROP CONSTRAINT link_attribute_pkey;
ALTER TABLE link_attribute_type DROP CONSTRAINT link_attribute_type_pkey;
ALTER TABLE link_type DROP CONSTRAINT link_type_pkey;
ALTER TABLE link_type_attribute_type DROP CONSTRAINT link_type_attribute_type_pkey;
ALTER TABLE medium DROP CONSTRAINT medium_pkey;
ALTER TABLE medium_cdtoc DROP CONSTRAINT medium_cdtoc_pkey;
ALTER TABLE medium_format DROP CONSTRAINT medium_format_pkey;
ALTER TABLE puid DROP CONSTRAINT puid_pkey;
ALTER TABLE recording DROP CONSTRAINT recording_pkey;
ALTER TABLE recording_annotation DROP CONSTRAINT recording_annotation_pkey;
ALTER TABLE recording_gid_redirect DROP CONSTRAINT recording_gid_redirect_pkey;
ALTER TABLE recording_meta DROP CONSTRAINT recording_meta_pkey;
ALTER TABLE recording_puid DROP CONSTRAINT recording_puid_pkey;
ALTER TABLE recording_rating_raw DROP CONSTRAINT recording_rating_raw_pkey;
ALTER TABLE recording_tag DROP CONSTRAINT recording_tag_pkey;
ALTER TABLE recording_tag_raw DROP CONSTRAINT recording_tag_raw_pkey;
ALTER TABLE release DROP CONSTRAINT release_pkey;
ALTER TABLE release_annotation DROP CONSTRAINT release_annotation_pkey;
ALTER TABLE release_coverart DROP CONSTRAINT release_coverart_pkey;
ALTER TABLE release_gid_redirect DROP CONSTRAINT release_gid_redirect_pkey;
ALTER TABLE release_group DROP CONSTRAINT release_group_pkey;
ALTER TABLE release_group_annotation DROP CONSTRAINT release_group_annotation_pkey;
ALTER TABLE release_group_gid_redirect DROP CONSTRAINT release_group_gid_redirect_pkey;
ALTER TABLE release_group_meta DROP CONSTRAINT release_group_meta_pkey;
ALTER TABLE release_group_primary_type DROP CONSTRAINT release_group_primary_type_pkey;
ALTER TABLE release_group_rating_raw DROP CONSTRAINT release_group_rating_raw_pkey;
ALTER TABLE release_group_secondary_type DROP CONSTRAINT release_group_secondary_type_pkey;
ALTER TABLE release_group_secondary_type_join DROP CONSTRAINT release_group_secondary_type_join_pkey;
ALTER TABLE release_group_tag DROP CONSTRAINT release_group_tag_pkey;
ALTER TABLE release_group_tag_raw DROP CONSTRAINT release_group_tag_raw_pkey;
ALTER TABLE release_label DROP CONSTRAINT release_label_pkey;
ALTER TABLE release_meta DROP CONSTRAINT release_meta_pkey;
ALTER TABLE release_name DROP CONSTRAINT release_name_pkey;
ALTER TABLE release_packaging DROP CONSTRAINT release_packaging_pkey;
ALTER TABLE release_raw DROP CONSTRAINT release_raw_pkey;
ALTER TABLE release_status DROP CONSTRAINT release_status_pkey;
ALTER TABLE release_tag DROP CONSTRAINT release_tag_pkey;
ALTER TABLE release_tag_raw DROP CONSTRAINT release_tag_raw_pkey;
ALTER TABLE replication_control DROP CONSTRAINT replication_control_pkey;
ALTER TABLE script DROP CONSTRAINT script_pkey;
ALTER TABLE script_language DROP CONSTRAINT script_language_pkey;
ALTER TABLE tag DROP CONSTRAINT tag_pkey;
ALTER TABLE tag_relation DROP CONSTRAINT tag_relation_pkey;
ALTER TABLE track DROP CONSTRAINT track_pkey;
ALTER TABLE track_name DROP CONSTRAINT track_name_pkey;
ALTER TABLE track_raw DROP CONSTRAINT track_raw_pkey;
ALTER TABLE tracklist DROP CONSTRAINT tracklist_pkey;
ALTER TABLE tracklist_index DROP CONSTRAINT tracklist_index_pkey;
ALTER TABLE url DROP CONSTRAINT url_pkey;
ALTER TABLE url_gid_redirect DROP CONSTRAINT url_gid_redirect_pkey;
ALTER TABLE vote DROP CONSTRAINT vote_pkey;
ALTER TABLE work DROP CONSTRAINT work_pkey;
ALTER TABLE work_alias DROP CONSTRAINT work_alias_pkey;
ALTER TABLE work_alias_type DROP CONSTRAINT work_alias_type_pkey;
ALTER TABLE work_annotation DROP CONSTRAINT work_annotation_pkey;
ALTER TABLE work_attribute DROP CONSTRAINT work_attribute_pkey;
ALTER TABLE work_attribute_name DROP CONSTRAINT work_attribute_name_pkey;
ALTER TABLE work_attribute_name_value DROP CONSTRAINT work_attribute_name_value_pkey;
ALTER TABLE work_gid_redirect DROP CONSTRAINT work_gid_redirect_pkey;
ALTER TABLE work_meta DROP CONSTRAINT work_meta_pkey;
ALTER TABLE work_name DROP CONSTRAINT work_name_pkey;
ALTER TABLE work_rating_raw DROP CONSTRAINT work_rating_raw_pkey;
ALTER TABLE work_tag DROP CONSTRAINT work_tag_pkey;
ALTER TABLE work_tag_raw DROP CONSTRAINT work_tag_raw_pkey;
ALTER TABLE work_type DROP CONSTRAINT work_type_pkey;
