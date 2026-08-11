import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus",
		de: "Nebulak"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Nightmare",
				fr: "Cauchemar",
				de: "Nightmare"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "The Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		en: "Its gas-like body allows it to enter almost anywhere, but it is vulnerable to high winds.",
		fr: "Son corps gazeux lui permet de se faufiler là où il veut, mais il le rend aussi vulnérable aux rafales de vent."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274717,
				tcgplayer: 85647
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274717,
				tcgplayer: 85647
			}
		}
	]
}

export default card
