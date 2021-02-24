import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Volcanion",
		fr: "Volcanion",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		721,
	],
	hp: 130,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Power Heater",
				fr: "Puissance de Chauffe",
			},
			effect: {
				en: "Choose 2 of your Benched Pokémon. Attach a Fire Energy card from your discard pile to each of those Pokémon.",
				fr: "Choisissez 2 de vos Pokémon de Banc. Attachez une carte Énergie Fire de votre pile de défausse à chacun des Pokémon choisis.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Steam Artillery",
				fr: "Artillerie Vapeur",
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
