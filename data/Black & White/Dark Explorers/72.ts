import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp",
		de: "Caesurio"
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
		en: "Pawniard",
		fr: "Scalpion"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche"
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
				en: "Fury Cutter",
				fr: "Taillade"
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 10 more damage. If 2 of them are heads, this attack does 30 more damage. If all of them are heads, this attack does 60 more damage.",
				fr: "Lancez 3 pièces. Si vous obtenez un côté face, cette attaque inflige 10 dégâts supplémentaires. Si vous obtenez 2 côtés face, cette attaque inflige 30 dégâts supplémentaires. Si vous obtenez seulement des côtés face, cette attaque inflige 60 dégâts supplémentaires."
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

	thirdParty: {
		cardmarket: 280400,
		tcgplayer: 83844
	}
}

export default card
