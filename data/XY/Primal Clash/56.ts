import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Manaphy",
		fr: "Manaphy",
	},
	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		490,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Deep Sea Swirl",
				fr: "Remous Abyssal",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 6 cards.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Life Saver",
				fr: "Sauvetage",
			},
			effect: {
				en: "Put 2 Water Pokémon from your discard pile into your hand.",
				fr: "Ajoutez 2 Pokémon Water de votre pile de défausse à votre main.",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
