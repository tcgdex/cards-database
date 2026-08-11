import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'de-de': "Glumanda"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [4],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Intimidation",
				'de-de': "Flare"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'de-de': "Rage"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each damage counter on Charmander.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Salamèche.",
				'de-de': "Does 10 damage plus 10 more damage for each damage counter on Charmander"
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84208,
				cardmarket: 275975
			},
		},
		{
			type: "holo",
			stamp: ["city-championships"],
			thirdParty: {
				tcgplayer: 215231,
				cardmarket: 275975
			},
		},
	],

}

export default card
