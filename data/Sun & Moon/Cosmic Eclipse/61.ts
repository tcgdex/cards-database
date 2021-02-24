import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Black Kyurem",
		fr: "Kyurem Noir",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		646,
	],
	hp: 130,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frozen Wings",
				fr: "Ailes Gelées",
			},
			effect: {
				en: "Discard a Special Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dazzling Blizzard",
				fr: "Blizzard Éblouissant",
			},
			effect: {
				en: "If you have any Stadium card in play, this attack does 100 more damage.",
				fr: "Si vous avez une carte Stade en jeu, cette attaque inflige 100 dégâts supplémentaires.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
