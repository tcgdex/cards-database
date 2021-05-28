import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu"
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Spike Draw",
				fr: "Pique-Pioche"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte."
			},
			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Knuckle Impact",
				fr: "Coup d’Articulations"
			},
			effect: {
				en: "During your next turn, this Pokémon can’t attack.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer."
			},
			damage: 160,

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
	regulationMark: "D"
}

export default card
