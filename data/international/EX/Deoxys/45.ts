import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus",
		'de-de': "Draschel"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		372,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Bagon",
		'fr-fr': "Draby"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Hard Protection",
				'fr-fr': "Protection dure",
				'de-de': "Hard Protection"
			},
			effect: {
				'en-us': "Prevent all damage done to Shelgon by attacks from your Pokémon.",
				'fr-fr': "Prévenez tous dégâts infligés à Drackhaus par des attaques de votre Pokémon.",
				'de-de': "Prevent all damage done to Shelgon by attacks from your Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Water",
			],
			name: {
				'en-us': "Rock Smash",
				'fr-fr': "Éclate-roc",
				'de-de': "Rock Smash"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 30 damage plus 10 more damage."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fire",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89125,
				cardmarket: 276448
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89125,
				cardmarket: 276448
			},
		},
	],

}

export default card
