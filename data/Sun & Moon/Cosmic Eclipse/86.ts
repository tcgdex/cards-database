import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Rotom",
		fr: "Motisma",
	},
	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		479,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cycle Draw",
				fr: "Pioche Cyclique",
			},
			effect: {
				en: "Discard a card from your hand. If you do, draw 2 cards.",
				fr: "Défaussez une carte de votre main. Dans ce cas, piochez 2 cartes.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Assist",
				fr: "Assistance Énergétique",
			},
			effect: {
				en: "Attach 2 basic Energy cards from your discard pile to your Benched Pokémon in any way you like.",
				fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à vos Pokémon de Banc, de la manière que vous voulez.",
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
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
