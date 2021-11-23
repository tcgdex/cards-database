import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Paras",
		fr: "Paras"
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		46,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spore",
				fr: "Spore"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Spore Evolution",
				fr: "Évolution spore"
			},
			effect: {
				en: "Search your deack for a card that evolves from Paras. Attach it to Paras. This counts as evolving Paras. Shuffle your deck afterwards.",
				fr: "Cherchez dans votre deck une carte Évolution de Paras. Attachez-la à Paras. Cela revient à le faire évoluer. Mélangez ensuite votre deck."
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
