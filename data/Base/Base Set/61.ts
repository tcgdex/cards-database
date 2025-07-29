import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Rattata",
		fr: "Rattata",
		de: "Rattfratz"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		19,
	],

	hp: 30,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},

			damage: 20,

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
			value: "-30"
		},
	],

	description: {
		fr: "Sa morsure est très puissante. Petit et rapide, on en voit un peu partout."
	},

	thirdParty: {
		cardmarket: 273756
	}
}

export default card
