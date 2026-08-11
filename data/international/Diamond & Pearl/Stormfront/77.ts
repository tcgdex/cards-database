import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Swinub",
		'fr-fr': "Marcacrin",
		'de-de': "Quiekel"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		220,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'fr-fr': "Marcacrin",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Freezing Breath",
				'fr-fr': "Souffle glacial",
				'de-de': "Eisatem"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt. Bei \"Zahl\" schläft das Verteidigende Pokémon jetzt."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Swinub does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Marcacrin s'inflige 10 dégâts.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" fügt sich Quiekel selbst 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It loves eating mushrooms that grow under dead grass. It also finds hot springs while foraging.",
		'fr-fr': "Il adore les champignons qui poussent sous l'herbe morte. Il trouve aussi des sources chaudes."
	},

	thirdParty: {
		cardmarket: 278375,
		tcgplayer: 89704
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
