import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus",
	},
	illustrator: "Takashi Yamaguchi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		92,
	],
	hp: 50,
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
				en: "Sneaky Placement",
				fr: "Placement vicieux",
			},
			effect: {
				en: "Put 1 damage counter on 1 of your opponent's Pokémon.",
				fr: "Placez un marqueur de dégât sur l'un des Pokémon de votre adversaire.",
			},

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
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
