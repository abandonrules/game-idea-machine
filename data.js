/**
 * the raw data used to generate game ideas
 */
module.exports = {

	sim : {

		style : [
			'realistic',
			'stylized',
			'historical',
			'fast paced',
			'light hearted',
			'cooperative',
			'multiplayer',
			'',
		],

		type : [
			'simulation game',
			'sim game',
			'management game',
			'god game',
			'tycoon game',
			'strategy game',
			'board game',
		],

		action : [
			'buy',
			'sell',
			'amass',
			'muster',
			'trade',
			'farm',
			'buy and sell',
			'deal in',
			'harvest',
			'collect',
			'gather',
			'look after',
			'hoard',
			'multiply',
			'organize',
			'contest',
			'fight over',
			'round up',
			'accumulate',
			'group',
		],

		resource : [
			'plants',
			'trees',
			'animals',
			'people',
			'workers',
			'employees',
			'citizens',
			'slaves',
			'gems',
			'gold',
			'crystals',
			'resources',
			'tokens',
			'mana',
			'water',
			'power',
			'influence',
			'sheep',
			'timber',
			'components',
			'machinery',
			'books',
			'knowledge',
			'data',
			'secrets',
			'supplies',
			'nutrients',
			'organs',
			'bonds',
			'stocks',
			'ingredients',
			'ore',
			'souls',
			'monsters',
		],

		control : [
			'conquer',
			'influence',
			'manage',
			'control',
			'run',
			'command',
			'build',
			'expand',
			'exploit',
			'create',
			'oversee',
			'supervise',
			'govern',
			'dominate',
		],

		environment : [
			'hospital',
			'theme park',
			'dungeon',
			'farm',
			'civilization',
			'society',
			'gang',
			'business',
			'empire',
			'island',
			'space station',
			'moon base',
			'railroad',
			'house',
			'household',
			'government',
			'town',
			'city',
			'country',
			'planet',
			'galaxy',
		],

		reason : [
			'until time runs out',
			'in timed rounds',
			'in phases',
			'faster than your opponents',
			'to make money',
			'to survive',
			'to defeat other players',
			'to win 3 rounds',
			'to defeat your opponents',
			'against the clock',
			'forever',
			'online',
			'against friends',
			'with friends',
		],

		templates : [
			'{{$ sim.style article=true}} {{$ sim.type}} where you {{$ sim.action}} {{$ sim.resource}} to {{$ sim.control}} {{$ sim.environment article=true}}',
			'{{$ sim.style article=true}} {{$ sim.type}} where you {{$ sim.action}} {{$ sim.resource}} and {{$ sim.action}} {{$ sim.resource}} to {{$ sim.control}} {{$ sim.environment article=true}}',
			'{{$ sim.style article=true}} {{$ sim.type}} where you {{$ sim.action}} {{$ sim.resource}} {{$ sim.reason}}',
			'{{$ sim.style article=true}} {{$ sim.type}} where you {{$ sim.action}} {{$ sim.resource}} and {{$ sim.action}} {{$ sim.resource}} {{$ sim.reason}}',
		]
	},

	action : {

		prefix : [
			'multiplayer',
			'cooperative',
			'online',
			'on-rails',
			'tactical',
			'cover based',
			'top down',
			'squad based',
			'twin stick',
			'',
		],

		type : [
			'FPS',
			'first person game',
			'shooter',
			'shoot em up',
			'survival horror game',
			'stealth action game',
			'beat em-up',
			'hack n slash',
			'platformer',
			'roguelike',
		],

		attack : [
			'shoot',
			'shoot at',
			'intimidate',
			'kick',
			'punch',
			'assasinate',
			'argue with',
			'set fire to',
			'scream at',
			'torture',
			'chase',
			'punish',
			'hunt down',
			'crush',
			'eradicate',
			'sabotage',
			'wipe out',
			'annihilate',
			'lay waste to',
			'exterminate',
			'butcher',
			'snuff out',
			'erase',
			'maim',
			'hunt',
			'battle',
			'chop up',
			'explode',
			'stomp on',
			'beat down',
			'destroy',
			'take down',
			'melt the insides of',
			'ransack the homes of',
			'mercilessly slaughter',
			'devour the souls of',
		],

		enemy_type : [
			'cyborg',
			'robot',
			'mutated',
			'radioactive',
			'evil',
			'rabid',
			'escaped',
			'hyperactive',
			'diseased',
			'rogue',
			'zombie',
			'possessed',
			'',
		],

		enemies : [
			'nazis',
			'zombies',
			'goblins',
			'dragons',
			'bugs',
			'insects',
			'dinosaurs',
			'yetis',
			'orcs',
			'rats',
			'bats',
			'wasps',
			'golems',
			'elementals',
			'fairies',
			'lizardmen',
			'spiders',
			'spies',
			'government agents',
			'skeletons',
			'ghosts',
			'vampires',
			'werewolves',
			'vikings',
			'gangsters',
			'drug dealers',
			'robots',
			'pirates',
			'demons',
			'devils',
			'cultists',
			'horrors',
			'blobs of ooze',
			'animals',
			'nightmare creatures from beyond our universe',
			'townsfolk',
			'villagers',
			'insurgents',
			'hillbillies',
			'devil worshippers'
		],

		modifier : [
			'in the face',
			'repeatedly',
			'from above',
			'from below',
			'from behind',
			'for fame',
			'for money',
			'with customizable weapons',
			'using the power of your mind',
			'with shurikens',
			'with swords',
			'with machine guns',
			'with a bazooka',
			'with grenades',
			'with a magical sword',
			'with explosive charges',
			'with nuclear weapons',
			'with a tank',
			'from the shadows',
			'with your bare hands',
			'with magical powers',
			'with an experimental physics manipulation weapon',
			'using vehicles'
		],

		extra : [
			'and eat the corpses',
			'and consume the remains',
			'and get cash for each kill',
			'and you are invincible',
			'and you are invisible',
			'and you get betrayed at the end',
			'and you can rewind time',
			'and you can slow down time',
			'and you can control gravity',
			'but you cannot jump',
			'but it turns out you were the bad guy the whole time',
			'but it is all a dream',
			'but it is all a simulation',
			'but you die in one hit',
			'',
			/* add more here */
		],

		templates : [
			'{{$ action.prefix article=true}} {{$ action.type}} where you {{$ action.attack}} {{$ action.enemy_type}} {{$ action.enemies}} {{$ action.modifier}}',
			'{{$ action.prefix article=true}} {{$ action.type}} where you {{$ action.attack}} {{$ action.enemy_type}} {{$ action.enemies}} {{$ action.extra}}',
			'{{$ action.prefix article=true}} {{$ action.type}} where you {{$ action.attack}} {{$ action.enemy_type}} {{$ action.enemies}} {{$ action.modifier}} {{$ action.extra}}',
		]
	},

	setting : {

		in_location : [
			'hospital',
			'garden',
			'house',
			'street',
			'farm',
			'car park',
			'mall',
			'city',
			'town',
			'village',
			'cavern',
			'office',
			'testing facility',
			'combat arena',
			'jungle',
			'mine',
			'quarry',
			'battlefield',
			'desert',
			'sewer',
			'warehouse',
			'cave system',
			'war zone',
		],

		on_location : [
			'military base',
			'submarine',
			'floating city',
			'aeroplane',
			'cruise ship',
			'train',
			'beach',
			'mountain',
			'spaceship',
			'moon base',
			'space station',
		],

		description : [
			'',
			'desolate',
			'spooky',
			'abandoned',
			'flooded',
			'dimly lit',
			'dark',
			'toxic',
			'radioactive',
			'war torn',
			'nondescript',
			'odd looking',
			'strange',
			'mysterious',
			'weird',
			'damp',
			'special',
			'impressive',
			'militarized',
			'once great',
			'destroyed',
			'ruined',
			'haunted',
			'futuristic',
			'steampunk',
			'hostile',
		],

		full : [
			'full of',
			'infested with',
			'overrun by',
			'home to',
		],

		templates : [
			'A game set in {{$ setting.description article=true}} {{$ setting.in_location}} {{$ setting.full}} {{$ action.enemy_type}} {{$ action.enemies}}',
			'A game set on {{$ setting.description article=true}} {{$ setting.on_location}} {{$ setting.full}} {{$ action.enemy_type}} {{$ action.enemies}}',
		]
	},

	weapon : {

		have : [
			'have',
			'wear',
			'wield',
			'carry',
			'use',
		],

		type : [
			'sword',
			'dagger',
			'knife',
			'pistol',
			'machine gun',
			'shotgun',
			'rifle',
			'cannon',
			'chainsaw',
			'katana',
			'staff',
			'halberd',
			'bow',
			'crossbow',
			'sniper rifle',
			'assault rifle',
			'gatling gun',
			'bazooka',
			'spear',
			'shield',
			'jetpack',
			'glove',
			'helmet',
			'hat',
			'backpack',
			'visor',
			'ring',
			'boomerang',
			'frisbee',
		],

		effect : [
			'are on fire',
			'are remote controlled',
			'explode',
			'bounce off walls',
			'lock on to enemies',
			'ricochet wildly',
			'turn enemies to stone',
			'burn enemies',
			'entangle enemies',
			'terrify enemies',
			'split in two',
			'glow eerily',
			'sparkle',
			'move randomly',
			'liquify enemies',
			'freeze enemies',
			'stun enemies',
			'absorb enemies health',
		],

		projectiles : [
			'knives',
			'bullets',
			'fireballs',
			'ice shards',
			'energy blasts',
			'blasts',
			'energy beams',
			'beams',
			'particles',
			'jets of foam',
			'jets of water',
			'clouds of steam',
			'small creatures',
			'bits of scenery',
			'pipe bombs',
			'fireworks',
			'lasers',
			'blobs of goop',
			'healing rays',
			'sound waves',
			'rockets',
			'shrink rays',
			'grenades',
			'land mines',
			'bees',
			'sharks',
			'custard pies',
			'telekinetic blasts',
		],

		extra : [
			'with a long cooldown',
			'with a short cooldown',
			'but needs recharging',
			'but you can only use it once per level',
			'but is discarded after use',
			'but using it costs you health',
			'and deals splash damage',
			'and can be upgraded',
			'and talks to you',
			'and has an annoying AI',
			'and misfires occasionaly',
			'and misfires often',
			'and has infinite ammo',
			'and has scarce ammo',
			'and uses anything as ammo',
			'and has limited ammo',
			'but is useless against some enemies',
			'and is more effective against some enemies',
			'and sometimes gets critical hits',
			'and damages the environment',
			'and looks awesome',
			'and looks stupid',
			'and looks cool',
			'but has massive recoil',
			'but is hard to aim',
			'but has a short range',
			'and has a long range',
		],

		verb : [
			'shoots',
			'deploys',
			'emits',
			'fires',
			'throws',
			'launches',
			'lobs',
		],

		templates : [
			'A game where you {{$ weapon.have}} {{$ weapon.type article=true}} that {{$ weapon.effect singular=true}} {{$ weapon.extra}}',
			'A game where you {{$ weapon.have}} {{$ weapon.type article=true}} that {{$ weapon.verb}} {{$ weapon.projectiles}} {{$ weapon.extra}}',
			'A game where you {{$ weapon.have}} {{$ weapon.type article=true}} that is also {{$ weapon.type article=true}} {{$ weapon.extra}}',
			'A game where you {{$ weapon.have}} {{$ weapon.type article=true}} which is attached to {{$ weapon.type article=true}} {{$ weapon.extra}}',
			'A game where you {{$ weapon.have}} {{$ weapon.type article=true}} that {{$ weapon.verb}} {{$ weapon.projectiles}} that {{$ weapon.effect}}',
		]
	},

	character : {

		verb : [
			'play',
			'control',
			'are',
		],

		job : [
			'space marine',
			'soldier',
			'war veteran',
			'cowboy',
			'gangster',
			'scientist',
			'explorer',
			'pilot',
			'pirate',
			'smuggler',
			'robot',
			'mutant',
			'survivor',
			'test subject',
			'sailor',
			'super soldier',
			'shop keeper',
			'rock star',
			'middle manager',
			'policeman',
			'fireman',
			'doctor',
			'minimum wage worker',
			'CEO',
			'programmer',
			'accountant',
			'student',
			'teenager',
			'housewife',
			'debutante',
			'celebrity',
			'slave',
			'trucker',
			'postman',
			'chef',
			'traffic warden',
			'school teacher',
			'mime',
			'musician',
			'actor',
			'artist',
			'archeologist',
			'alien',
			'astronaut',
		],

		description : [
			'rugged',
			'grizzled',
			'psychotic',
			'depressed',
			'angry',
			'genocidal',
			'lost',
			'lonely',
			'young',
			'old',
			'drug addled',
			'clean living',
			'born again',
			'retired',
			'famous',
			'paranoid',
			'starving',
			'clumsy',
			'vengeful',
			'manic',
			'repressed',
			'jealous',
			'muscular',
			'skinny',
			'stocky',
			'dilligent',
			'attentive',
			'sketchy',
			'shadowy',
			'mysterious',
			'friendly',
			'hostile',
			'out of place',
			'puzzled',
			'timid',
			'comical',
			'serious',
			'determined',
			'disguised',
			'desperate',
			'illiterate',
			'sickly',
			'mean',
			'miserly',
			'generous',
			'vapid',
			'domineering',
			'loud',
			'quiet',
		],

		thing : [
			'to dance',
			'to sing',
			'to paint',
			'fruit',
			'chocolate',
			'cheese',
			'fast food',
			'pizza',
			'computers',
			'music',
			'sports',
			'cars',
			'TV',
			'work',
			'money',
			'children',
			'babies',
			'old people',
			'charity',
			'killing things',
			'running',
			'violence',
			'swimming',
			'social situations',
			'to be alone',
			'heights',
			'small spaces',
			'open spaces',
			'the country',
			'the city',
			'other people',
			'robots',
			'art',
			'music',
			'paperwork',
			'silence',
			'daylight',
			'mornings',
			'citrus fruits',
			'getting wet',
			'being cold',
			'hippies',
			'republicans',
			'the monarchy',
		],

		does : [
			'get confused easily',
			'hoards collectables',
			'avoids conflict',
			'misses home',
			'wants to go home',
			'is afraid of the dark',
			'has daddy issues',
			'wears vintage clothes',
			'listens to jazz music',
			'plays the guitar',
			'has body issues',
			'gets bored easily',
			'lacks confidence',
			'watches too much tv',
			'enjoys life',
			'eats too much',
			'has repressed memories',
			'has anger issues',
			'struggles with maths',
			'longs for a quiet life',
			'wants to retire',
			'refuses to follow orders',
			'respects authority',
			'ignores orders',
		],

		templates : [
			'A game where you {{$ character.verb}} {{$ character.description article=true}} {{$ character.job}} who loves {{$ character.thing}}',
			'A game where you {{$ character.verb}} {{$ character.description article=true}} {{$ character.job}} who hates {{$ character.thing}}',
			'A game where you {{$ character.verb}} {{$ character.description article=true}} {{$ character.job}} who loves {{$ character.thing}} but hates {{$ character.thing}}',
			'A game where you {{$ character.verb}} {{$ character.description article=true}} {{$ character.job}} who loves {{$ character.thing}} and {{$ character.does}}',
			'A game where you {{$ character.verb}} {{$ character.description article=true}} {{$ character.job}} who hates {{$ character.thing}} and {{$ character.does}}',
			'A game where you {{$ character.verb}} {{$ character.description article=true}} {{$ character.job}} who is afraid of {{$ action.enemies}}',
			'A game where you {{$ character.verb}} {{$ character.description article=true}} {{$ character.job}} who has spent years fighting {{$ action.enemies}}',
			'A game where you {{$ character.verb}} {{$ character.description article=true}} {{$ character.job}} who is fleeing {{$ action.enemies}}',
		]
	},

	adventure : {

		style : [
			'gritty',
			'dark',
			'hyper realistic',
			'stylized',
			'colourful',
			'adult',
			'intense',
			'childish',
			'noir',
			'relaxing',
			'slapstick',
			'historical',
			'contemplative',
			'fast paced',
			'lonely',
			'thought provoking',
			'funny',
			'sarcastic',
			'heart warming',
			'satirical',
			'scary',
			'disturbing',
			'cartoon',
			'cell shaded',
			'light hearted',
			'open world',
			'cooperative',
			'multiplayer',
			'',
		],

		type : [
			'adventure game',
			'story driven game',
			'piece of interactive fiction',
			'RPG',
			'action adventure',
			'role playing game',
			'text adventure',
			'point and click game',
			'action RPG',
		],

		incident : [
			'meet a stranger',
			'discover a dark secret',
			'stumble upon a sinister plot',
			'witness a murder',
			'travel back in time',
			'travel forwards in time',
			'are involved in an accident',
			'are injured',
			'lose everything',
			'lose your memory',
			'lose a loved one',
			'wake up in a strange place',
			'are kidnapped',
			'have a bad day',
			'fall in love',
			'are given an important task',
			'must prove yourself',
		],

		act : [
			'gather a party',
			'gather supplies',
			'craft weapons',
			'explore the area',
			'assemble a team',
			'leave your home town',
			'train your skills',
			'gain special powers',
			'learn new skills',
			'upgrade your equipment',
			'assemble an artifact',
			'piece together clues',
			'gather evidence',
			'perform menial chores',
			'kill monsters',
			'explore mysterious ruins',
			'explore a strange place',
			'experience new emotions',
			'overcome your fear',
			'become a warrior',
			'become the leader',
			'gain respect',
			'are put in charge',
			'collect equipment',
			'learn all you can',
			'escape captivity',
			'go an an epic quest',
			'go on a long journey',
			'visit strange new lands',
			'explore distant lands',
			'struggle against adversity',
			'face terrifying foes',
			'defeat numerous enemies',
			'vanquish determined enemies',
		],

		goal : [
			'gain levels',
			'get the girl',
			'get drunk',
			'get your job back',
			'find true love',
			'discover the truth',
			'redeem yourself',
			'find forgiveness',
			'save the day',
			'become the leader',
			'prove yourself',
			'impress girls',
			'undo your mistakes',
			'reveal the truth',
			'fulfil an ancient prophecy',
			'make up for the past',
			'disover yourself',
			'get rich',
			'look cool',
			'gain fabulous wealth',
			'uncover the secrets of your past',
			'save your family',
			'take down a corrupt government',
			'become amazingly wealthy',
			'escape your past',
		],

		templates : [
			'{{$ adventure.type article=true}} where you {{$ adventure.incident}} then {{$ adventure.act}} to {{$ adventure.goal}}',
			'{{$ adventure.type article=true}} where you {{$ adventure.incident}} then {{$ adventure.act}} to {{$ adventure.goal}}',
			'{{$ adventure.style article=true}} {{$ adventure.type }} where you {{$ adventure.incident}} then {{$ adventure.act}} to {{$ adventure.goal}}',
			'{{$ adventure.style article=true}} {{$ adventure.type }} where you {{$ adventure.incident}} then {{$ adventure.act}} to {{$ adventure.goal}}',
		]

	},

	mashup : {

		game : [
			'Minecraft',
			'Mario',
			'Zelda',
			'Halo',
			'Portal',
			'Half Life',
			'Half Life 2',
			'Team Fortress',
			'Doom',
			'Grand Theft Auto',
			'LittleBigPlanet',
			'Wii Fit',
			'Rock Band',
			'Guitar Hero',
			'GoldenEye',
			'Advance Wars',
			'Resident Evil',
			'Street Fighter',
			'Dark Souls',
			'Starcraft',
			'Ultima Online',
			'World of Warcraft',
			'EVE Online',
			'Everquest',
			'Monster Hunter',
			'The Sims',
			'Dwarf Fortress',
			'Planetside',
			'Rayman',
			'Tetris',
			'Super Monkey Ball',
			'Silent Hill',
			'Skylanders',
			'Ico',
			'Shadow of the Colossus',
			'Katamari Damacy',
			'Animal Crossing',
			'God of War',
			'Diablo',
			'Metal Slug',
			'Banjo Kazooie',
			'Braid',
			'Fez',
			'Prince of Persia',
			'Civilization',
			'Sim City',
			'Bioshock',
			'Shenmue',
			'Uncharted',
			'Tomb Raider',
			'Final Fantasy',
			'Pikmin',
			'Metroid',
			'Mario Kart',
			'Gran Turismo',
			'Mortal Kombat',
			'Devil May Cry',
			'Call of Duty',
			'Angry Birds',
			'Cut the Rope',
			'Fruit Ninja',
			'Farmville',
			'Cookie Clicker',
			'The Oregon Trail',
			'Morrowind',
			'Skyrim',
			'Wing Commander',
			'Elite',
			'Homeworld',
			'Sonic the Hedgehog',
			'Sonic Adventure',
			'Terraria',
			'Tekken',
			'X Wing',
			'Virtua Fighter',
			'Geometry Wars',
			'Mario Party',
			'Brain Age',
			'Second Life',
			'Harvest Moon',
			'Crash Bandicoot',
			'Streets of Rage',
			'Smash Bros',
			'Need for Speed',
			'Breakout',
			'Pong',
			'Battlefield',
			'Assassins Creed',
			'Tony Hawks Pro Skater',
			'Tamagotchi',
			'Command and Conquer',
			'Gauntlet',
			'Metal Gear Solid',
			'Counter Strike',
			'Bejewelled',
			'Pac Man',
			'Unreal Tournament',
			'Far Cry',
			'Crysis',
			'Wii Sports',
			'Hotline Miami',
			'Blast Corps',
			'Toejam and Earl',
			'Dr Mario',
			'Alex Kid',
			'Myst',
			'Carmageddon',
			'Thief',
			'Deus Ex',
		],

		feature : [
			'with permadeath',
			'with crafting',
			'with high scores',
			'more story driven',
			'with a better plot',
			'with social integration',
			'with better graphics',
			'with retro graphics',
			'with more content',
			'shorter',
			'longer',
			'more serious',
			'less serious',
			'darker in tone',
			'lighter in tone',
			'funnier',
			'with a sense of humor',
		],

		compare_look : [
			'with the look of',
			'which looks like',
			'with the graphics of',
		],

		compare_feel : [
			'with elements from',
			'with the gameplay of',
			'which plays like',
			'which controls like',
		],

		templates : [
			'A game like {{$ mashup.game}} mixed with {{$ mashup.game}}, but {{$ mashup.feature}}',
			'A cross between {{$ mashup.game}} and {{$ mashup.game}}, but {{$ mashup.feature}}',
			'A game {{$ mashup.compare_look}} {{$ mashup.game}}, but {{$ mashup.compare_feel}} {{$ mashup.game}}',
			'A game {{$ mashup.compare_feel}} {{$ mashup.game}}, but {{$ mashup.compare_look}} {{$ mashup.game}}',
		]

	},

	indie : {

		description : [
			'open beta',
			'crowd funded',
			'thought provoking',
			'high concept',
			'tongue in cheek',
			'straight faced',
			'critically acclaimed',
			'community made',
			'open source',
			'barely finished',
			'confusing',
			'bug filled',
			'heavily hyped',
			'over hyped',
			'misunderstood',
			'post modern',
			'bohemian',
			'hipster',
			'cutting edge',
			'bleeding edge',
		],

		type : [
			'indie platformer',
			'game jam entry',
			'IGF entry',
			'experimental game',
			'tech demo',
			'student project',
			'sandbox game',
			'art house game',
		],

		feature :  [
			'roguelike elements',
			'multiple endings',
			'difficult moral choices',
			'a persistant world',
			'permadeath',
			'crafting',
			'social features',
			'achievements',
			'in app purchases',
			'DLC',
			'episodic content',
			'weekly updates',
			'a developer diary',
			'a twitter account',
			'randomization',
			'amazing graphics',
			'crude graphics',
			'procedural content',
			'user generated content',
			'a high score table',
			'motion controls',
			'touch controls',
			'local multiplayer',
			'a powerful message',
			'an intriguing story',
			'difficult choices',
			'a disturbing subtext',
			'easter eggs',
			'a cloth map',
		],

		issue : [
			'religion',
			'politics',
			'gender',
			'identity',
			'self',
			'existence',
			'love',
			'jealousy',
			'loss',
			'death',
			'birth',
			'loneliness',
			'friendship',
			'hatred',
			'exploration',
			'home',
			'evolution',
			'growth',
			'disease',
			'tyranny',
			'poverty',
			'wealth',
			'control',
			'drugs',
			'sex',
			'addiction',
			'desire',
			'self loathing',
			'illness',
			'humanity',
			'greed',
			'fear',
		],

		restriction : [
			'no text',
			'no UI',
			'a 60 second countdown',
			'only 1 button',
			'programmer art',
			'placeholder art',
			'no sound',
			'only 2 buttons',
			'a limited palette',
			'only 3 colors',
			'8 bit graphics',
			'vector graphics',
			'16 bit graphics',
		],

		templates : [
			'{{$ indie.description article=true}} {{$ indie.type}} with {{$ indie.feature}} and a theme of {{$ indie.issue}}',
			'{{$ indie.description article=true}} {{$ indie.type}} with {{$ indie.feature}}, {{$ indie.feature}} and {{$ indie.restriction}}',
			'{{$ indie.description article=true}} {{$ indie.type}} dealing with issues of {{$x2 indie.issue}}',
		]
	},

	racing : {

		prefix : [
			'delapidated',
			'shiny new',
			'battle damaged',
			'corporate sponsored',
			'steampunk',
			'futuristic',
			'colorful',
			'cartoony',
			'modified',
			'customizable',
			'fragile',
			'speedy',
			'sluggish',
		],

		type : [
			'rally cars',
			'sports cars',
			'F1 cars',
			'karts',
			'SUVs',
			'trucks',
			'motorbikes',
			'motocross bikes',
			'mountain bikes',
			'tricycles',
			'hovercraft',
			'row boats',
			'boats',
			'canoes',
			'jetskis',
			'planes',
			'rockets',
			'shopping carts',
			'spaceships',
			'hovercars',
			'flying saucers',
			'helicopters',
			'hang gliders',
			'jet packs',
			'unicycles',
			'segways',
		],

		animal : [
			'horses',
			'camels',
			'elephants',
			'dolphins',
			'eagles',
			'mice',
		],

		extra : [
			'firing weapons',
			'using powerups',
			'hitting boost pads',
			'doing stunts',
			'collecting pickups',
			'placing traps',
			'avoiding traps',
			'dodging hazards',
			'taking shortcuts',
			'against the clock',
			'against your best time',
			'against your friends',
			'in an open world'
		],
		around : [
			'around',
			'round',
			'through',
			'about',
		],
		control : [
			'race',
			'rush',
			'career',
			'dash',
			'dart',
			'zoom',
			'speed',
			'hurtle',
		],
		templates : [
			'A racing game where you ride {{$ racing.prefix}} {{$ racing.animal}} {{$ racing.around}} {{$ setting.description article=true}} {{$ setting.in_location}}',
			'A game where you race {{$ racing.prefix}} {{$ racing.type}} {{$ racing.around}} {{$ setting.description article=true}} {{$ setting.in_location}}',
			'A racing game where you {{$ racing.control}} {{$ racing.around}} {{$ setting.description article=true}} {{$ setting.in_location}} in {{$ racing.prefix}} {{$ racing.type}}',
			'A game where you race {{$ racing.prefix}} {{$ racing.type}} {{$ racing.around}} {{$ setting.description article=true}} {{$ setting.in_location}} {{$ racing.extra}}',
			'A racing game where you {{$ racing.control}} {{$ racing.around}} {{$ setting.description article=true}} {{$ setting.in_location}} in {{$ racing.prefix}} {{$ racing.type}} {{$ racing.extra}}',
		]
	},

	mobile : {
		type : [
			'colorful',
			'cartoony',
			'realistic',
			'stylized',
			'minimalistic',
			'serious',
			'comical',
			'light hearted',
			'complex',
		],
		genre : [
			'arcade game',
			'family game',
			'kids game',
			'strategy game',
			'simulation game',
			'physics game',
			'puzzle game',
			'action game',
			'board game',
			'game',
		],
		input : [
			'drag',
			'press',
			'slide',
			'fling',
			'pinch',
			'stroke',
			'swipe',
			'slice',
			'draw',
			'touch',
			'match',
			'swap',
			'control',
			'manipulate',
		],
		subject : [
			'birds',
			'jewels',
			'maps',
			'coins',
			'clans',
			'knights',
			'dragons',
			'words',
			'blocks',
			'poker chips',
			'playing cards',
			'candy',
			'colors',
			'trains',
			'dots',
			'shapes',
			'icons',
			'letters',
			'monsters',
			'aeroplanes',
			'heroes',
			'pigs',
			'cows',
			'goo',
			'plants',
			'zombies',
			'doodles',
			'cookies',
			'farm animals',
			'animals',
			'fruit',
			'vegetables',
			'creatures',
		],
		action : [
			'shake your phone',
			'tilt your phone',
			'wave your phone around',
			'rotate your phone',
			'answer questions',
			'take photos',
			'record videos',
			'geotag locations',
			'check in',
		],
		goal : [
			'to complete levels',
			'to keep playing',
			'to get to the end',
			'to stay alive',
			'to get points',
			'to win',
			'to defeat your opponent',
			'with friends',
			'with strangers',
		],
		extra : [
			'with augmented reality',
			'with in-game currency',
			'with a global high score table',
			'with unlockable content',
			'with unlockable characters',
			'with unlockable levels',
			'with in-app purchases',
			'with cloud saves',
			'with twitter integration',
			'with facebook integration',
			'with instagram integration',
			'with asynchronous multiplayer',
			'with realtime multiplayer',
			'with sharing options',
			'with custom avatars',
			'with custom houses',
			'with custom pets',
			'with no end',
			'with no way to lose',
			'with no way to win',
			'with weekly updates',
			'with monthly updates',
			'with an active community',
			'with user generated content',
		],
		templates : [
			'{{$ mobile.type article=true}} mobile {{$ mobile.genre}} {{$ mobile.extra}} where you {{$ mobile.input}} {{$ mobile.subject}} {{$ mobile.goal}}',
			'{{$ mobile.type article=true}} mobile {{$ mobile.genre}} {{$ mobile.extra}} where you {{$ mobile.input}} {{$ mobile.subject}} and {{$ mobile.action}} {{$ mobile.goal}}',
			'{{$ mobile.type article=true}} mobile {{$ mobile.genre}} where you {{$ mobile.input}} {{$ mobile.subject}} {{$ mobile.goal}}',
			'{{$ mobile.type article=true}} mobile {{$ mobile.genre}} where you {{$ mobile.input}} {{$ mobile.subject}} and {{$ mobile.action}} {{$ mobile.goal}}',
		]
	}

};
