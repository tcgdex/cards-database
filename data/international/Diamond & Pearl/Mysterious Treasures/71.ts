import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Aron",
		'fr-fr': "Galekid",
		'de-de': "Stollunior"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		304,
	],

	hp: 50,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Steel Tackle",
				'fr-fr': "Charge d'acier",
				'de-de': "Stahltackle"
			},
			effect: {
				'en-us': "Aron does 10 damage to itself.",
				'fr-fr': "Galekid s'inflige 10 dégâts.",
				'de-de': "Stollunior fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It usually lives deep in mountains. However, hunger may drive it to eat railroad tracks and cars.",
		'fr-fr': "Il vit habituellement au cœur des montagnes. Affamé, il dévore parfois des rails et des voitures."
	},

	thirdParty: {
		cardmarket: 277700,
		tcgplayer: 83636
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
