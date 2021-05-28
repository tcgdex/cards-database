import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Scrafty",
		fr: "Baggaïd",
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		560,
	],
	hp: 110,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Turf Raid",
				fr: "Raid Territorial",
			},
			effect: {
				en: "This attack does 20 more damage for each of your remaining Prize cards.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacune des cartes Récompense qu’il vous reste.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbang",
				fr: "Frappe de Tête",
			},

			damage: 70,

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
	retreat: 2,



}

export default card
