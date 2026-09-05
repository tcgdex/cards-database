import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Gabite",
		fr: "Carmache",
		de: "Knarksel"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		444,
	],
	hp: 80,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Gible",
		fr: "Griknot",
		de: "Kaumalat"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Ascension",
				fr: "Ascension",
				de: "Aufstieg"
			},
			effect: {
				en: "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		en: "Shiny objects are its passion. It can be found in its cave, scarcely moving, its gaze fixed on the jewels it's amassed or Carbink it has caught.",
		de: "Es liebt funkelnde Dinge. Edelsteine und gefangene Rocara nimmt es mit in sein Nest, um sich an ihrem Anblick zu weiden."
	},
}

export default card
