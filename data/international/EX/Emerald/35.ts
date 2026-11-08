import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Loudred",
		'fr-fr': "Ramboum",
		'de-de': "Krakeelo"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		294,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Whismur",
		'fr-fr': "Chuchmur"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
				'fr-fr': "Plaquage",
				'de-de': "Body Slam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-edge",
				'fr-fr': "Damoclès",
				'de-de': "Double-edge"
			},
			effect: {
				'en-us': "Loudred does 10 damage to itself.",
				'fr-fr': "Ramboum s'inflige 10 dégâts.",
				'de-de': "Loudred does 10 damage to itself."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 86841,
		cardmarket: 276546
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86841,
				cardmarket: 276546
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86841,
				cardmarket: 276546
			},
		},
		{
			type: "normal",
			stamp: ["regional-championships"],
			thirdParty: {
				cardmarket: 449698
			},
		},
		{
			type: "normal",
			stamp: ["state-championships"],
			thirdParty: {
				tcgplayer: 247287,
				cardmarket: 449703
			},
		}
	],
}

export default card
