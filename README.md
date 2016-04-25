# Game Idea Machine [![Build Status][travis-image]][travis-url]
A twitter bot which tweets randomly generated ideas for games.

Occasionally funny, often bizarre, hopefully useful.

Will reply with an idea if you tweet "@gameideamachine [command]", where [command] is one of:

* __idea__ - a totally random idea from any category
* __sim__ - a sim/tycoon/board game
* __action__ - an action/shooter type game
* __adventure__ - an RPG/adventure game
* __indie__ - an arty/indie game
* __racing__ - a racing game
* __mashup__ - a suggestion referencing existing games
* __weapon__ - an idea centered around a weapon of some sort
* __setting__ - an idea focused on the setting
* __character__ - a game based on a particular character
* __boss__ - an idea for a boss encounter

Comments and suggestions should be tweeted to [@beeglebug](http://twitter.com/beeglebug)

## How it works

1. It picks a random idea type, such as "weapon", or "setting" (it skips this step if a type is explicitly passed).
2. It picks a random template of that type, such as "You play a {{hero}} who kills {{enemies}}".
3. It uses [Handlebars](http://handlebarsjs.com) to compile the template, and pulls in random words and phrases to replace the template tags.
4. It then does a few sanity checks and cleanup operations, before tweeting it (either to it's own feed, or as a reply).

## Contributing

The best way to contribute is to add more words and phrases to the [data set](https://github.com/beeglebug/game-idea-machine/blob/master/data), which will allow the bot to generate a wider variety of ideas.

## Thanks

* Thanks to @xanderlewis for adding more data
* Thanks to @agjmills for fixing the code indentation
* Thanks to @lordy81 for adding support for multiple tweets in a row
* Thanks to @aschearer for fixing a typo

[travis-url]: http://travis-ci.org/beeglebug/game-idea-machine
[travis-image]: http://img.shields.io/travis/beeglebug/game-idea-machine/master.svg?style=flat