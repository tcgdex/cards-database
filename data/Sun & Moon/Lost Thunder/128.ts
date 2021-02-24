import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Durant",
		fr: "Fermite",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		632,
	],
	hp: 80,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Knock Over",
				fr: "Culbute",
			},
			effect: {
				en: "You may discard any Stadium card in play.",
				fr: "Vous pouvez défausser toute carte Stade en jeu.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mountain Munch",
				fr: "Dévore-Montagne",
			},
			effect: {
				en: "Discard the top 2 cards of your opponent's deck.",
				fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			},

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
	retreat: 1,



}

export default card
