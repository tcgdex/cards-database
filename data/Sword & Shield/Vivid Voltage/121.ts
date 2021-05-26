import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Dialga",
		fr: "Dialga"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Metal",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rewind Time",
				fr: "Saut Temporel"
			},
			effect: {
				en: "Attach up to 2 Metal Energy cards from your discard pile to 1 of your Pokémon.",
				fr: "Attachez jusqu’à 2 cartes Énergie Metal de votre pile de défausse à l’un de vos Pokémon."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Flash of Destruction",
				fr: "Flash de Destruction"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
