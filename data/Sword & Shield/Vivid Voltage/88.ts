import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Hitmontop",
		fr: "Kapoera"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Fighting",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cycle Draw",
				fr: "Pioche Cyclique"
			},
			effect: {
				en: "Discard a card from your hand. If you do, draw 3 cards.",
				fr: "Défaussez une carte de votre main. Dans ce cas, piochez 3 cartes."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tornado Kick",
				fr: "Coup de Pied Tornade"
			},
			effect: {
				en: "If you played Bea from your hand during this turn, this attack does 80 more damage.",
				fr: "Si vous avez joué Faïza de votre main pendant ce tour, cette attaque inflige 80 dégâts supplémentaires."
			},
			damage: "50+",

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
