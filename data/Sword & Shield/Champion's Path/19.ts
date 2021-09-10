import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Hattrem",
		fr: "Chapotus",
		es: "Hattrem",
		it: "Hattrem",
		pt: "Hattrem",
		de: "Brimano"
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
				fr: "Bataille",
				es: "Toque",
				it: "Battuta",
				pt: "Pulso",
				de: "Verprügler"
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
				fr: "Super Psy",
				es: "Superrayo Psi",
				it: "Superpsico",
				pt: "Super-raio Psíquico",
				de: "Super-Psischlag"
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
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "No matter who you are, if you bring strong emotions near this Pokémon, it will silence you violently."
	}
}

export default card
