import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Raticate",
		fr: "Rattatac"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Poochyena",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Fang",
				fr: "Croc Fatal"
			},
			effect: {
				en: "Does damage to the Defending Pokémon equal to half the Defending Pokémon's remaining HP (rounded up to the nearest 10).",
				fr: "Inflige une quantité de dégâts au Pokémon Défenseur égale à la moitié de ses PV restants (arrondis à la dizaine la plus proche)."
			},
			damage: "?",

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
		fr: "Si ses moustaches sont coupées, il perd le sens de l'équilibre et devient moins rapide."
	}
}

export default card
