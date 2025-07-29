import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Skarmory",
		de: "Panzaeron"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		227,
	],

	hp: 80,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Steel Coat",
				de: "Stahlmantel"
			},
			effect: {
				en: "Search your deck for a Metal Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				de: "Durchsuche dein Deck nach einer -Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Wing",
				de: "Rasierflügel"
			},

			damage: 40,

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
			type: "Psychic",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 279674
	}
}

export default card
