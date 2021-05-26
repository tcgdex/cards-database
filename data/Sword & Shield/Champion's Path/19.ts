import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Hattrem",
		fr: "Chapotus"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Hatenna",
		fr: "Bibichut"
	},



	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Beat",
				fr: "Bataille"
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
				fr: "Super Psy"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
