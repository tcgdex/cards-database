import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Rattata",
		fr: "Rattata",
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		19,
	],
	hp: 30,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dangerous Suspicion",
				fr: "Soupçon Dangereux",
			},
			effect: {
				en: "Draw a card. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Piochez une carte. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
