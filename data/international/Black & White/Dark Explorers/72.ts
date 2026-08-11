import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'de-de': "Caesurio"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		625,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche"
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Cutter",
				'fr-fr': "Taillade"
			},
			effect: {
				'en-us': "Flip 3 coins. If 1 of them is heads, this attack does 10 more damage. If 2 of them are heads, this attack does 30 more damage. If all of them are heads, this attack does 60 more damage.",
				'fr-fr': "Lancez 3 pièces. Si vous obtenez un côté face, cette attaque inflige 10 dégâts supplémentaires. Si vous obtenez 2 côtés face, cette attaque inflige 30 dégâts supplémentaires. Si vous obtenez seulement des côtés face, cette attaque inflige 60 dégâts supplémentaires."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Bisharp pursues prey in the company of a large group of Pawniard. Then Bisharp finishes off the prey.",
	},

	thirdParty: {
		cardmarket: 280400,
		tcgplayer: 83844
	}
}

export default card
