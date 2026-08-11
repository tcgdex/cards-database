import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Dragonair δ",
		'fr-fr': "Draco δ",
		'de-de': "Dragonir"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		148,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Lightning",
			],
			name: {
				'en-us': "Twister",
				'fr-fr': "Ouragan",
				'de-de': "Twister"
			},
			effect: {
				'en-us': "Flip 2 coins. If both are tails, this attack does nothing. For each heads, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez 2 pièces. Si ce sont deux piles, cette attaque est sans effet. Pour chaque face, défaussez une Énergie attachée au Pokémon Défenseur.",
				'de-de': "Flip 2 coins. If both are tails, this attack does nothing. For each heads, discard an Energy attached to the Defending Pokémon."
			},
			damage: 20,

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
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 276804
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

