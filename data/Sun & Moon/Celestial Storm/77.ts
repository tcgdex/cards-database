import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Medicham",
		fr: "Charmina",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		308,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Meditite",
		fr: "Méditikka",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Strike of Enlightenment",
				fr: "Frappe Révélatrice",
			},
			effect: {
				en: "If this Pokémon's remaining HP is 30 or less, this attack does 160 more damage.",
				fr: "S’il reste 30 PV ou moins à ce Pokémon, cette attaque inflige 160 dégâts supplémentaires.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Spinning Kick",
				fr: "Coup Tournant",
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige 30 dégâts.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
