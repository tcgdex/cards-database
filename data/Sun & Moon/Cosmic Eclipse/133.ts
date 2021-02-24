import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Absol",
		fr: "Absol",
	},
	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		359,
	],
	hp: 100,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ominous News",
				fr: "Mauvais Augure",
			},
			effect: {
				en: "Discard a Special Energy from 1 of your opponent's Pokémon.",
				fr: "Défaussez une Énergie spéciale de l’un des Pokémon de votre adversaire.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dirty Throw",
				fr: "Vilain Lancer",
			},
			effect: {
				en: "Discard a card from your hand. If you can't discard a card, this attack does nothing.",
				fr: "Défaussez une carte de votre main. Si vous ne pouvez pas défausser de carte, cette attaque ne fait rien.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
