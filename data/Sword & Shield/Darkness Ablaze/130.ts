import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Melmetal",
		fr: "Melmetal"
	},
	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Meltan",
		fr: "Meltan"
	},



	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Energy Link",
				fr: "Chaîne d’Énergie"
			},
			effect: {
				en: "Attach an Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie de votre pile de défausse à ce Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Impact",
				fr: "Gros Impact"
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
	retreat: 4,



}

export default card
