package t::MusicBrainz::Server::Edit::Medium::Create;
use Test::Routine;
use Test::More;

with 't::Context';

BEGIN { use MusicBrainz::Server::Edit::Medium::Create; }

use MusicBrainz::Server::Constants qw( $EDIT_MEDIUM_CREATE );
use MusicBrainz::Server::Types qw( $STATUS_APPLIED );
use MusicBrainz::Server::Test qw( accept_edit reject_edit );

use aliased 'MusicBrainz::Server::Entity::ArtistCredit';
use aliased 'MusicBrainz::Server::Entity::ArtistCreditName';
use aliased 'MusicBrainz::Server::Entity::Track';

test all => sub {

my $test = shift;
my $c = $test->c;

MusicBrainz::Server::Test->prepare_test_database($c, '+create_medium');

my $tracklist = [
    Track->new(
        name => 'Fluffles',
        artist_credit => ArtistCredit->new(
            names => [
                ArtistCreditName->new(
                    name => 'Warp Industries',
                    artist_id => 1
                )]),
        recording_id => 1,
        position => 1
    )
];

my $edit = $c->model('Edit')->create(
    edit_type => $EDIT_MEDIUM_CREATE,
    editor_id => 1,
    name => 'Studio',
    position => 1,
    format_id => 1,
    release_id => 1,
    tracklist => $tracklist
);

isa_ok($edit, 'MusicBrainz::Server::Edit::Medium::Create');

ok(defined $edit->medium_id);
ok(defined $edit->id);

$c->model('Edit')->load_all($edit);
ok($edit->display_data);
is($edit->display_data->{name}, 'Studio');
is($edit->display_data->{position}, 1);
is($edit->display_data->{format}->id, 1);
is($edit->display_data->{release}->id, 1);
is($edit->display_data->{release}->artist_credit->name, 'Tosca');

accept_edit($c, $edit);

my $medium = $c->model('Medium')->get_by_id($edit->medium_id);
is($medium->edits_pending, 0);

## Create a medium to reject
$edit = $c->model('Edit')->create(
    edit_type => $EDIT_MEDIUM_CREATE,
    editor_id => 1,
    name => 'Live',
    position => 2,
    format_id => 1,
    release_id => 1,
    tracklist => $tracklist
);

my $medium_id = $edit->medium_id;
$medium = $c->model('Medium')->get_by_id($medium_id);
my $tracklist_id = $medium->tracklist_id;
reject_edit($c, $edit);

$medium = $c->model('Medium')->get_by_id($medium_id);
ok(!defined $medium);

$tracklist = $c->model('Tracklist')->get_by_id($tracklist_id);
ok(!defined $tracklist, 'deleted now orphaned tracklist');

};

1;
