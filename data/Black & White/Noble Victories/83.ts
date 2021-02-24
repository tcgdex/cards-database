import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Durant",
		fr: "Fermite",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		632,
	],
	hp: 70,
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
				en: "Devour",
				fr: "Voracité",
			},
			effect: {
				en: "For each of your Durant in play, discard the top card of your opponent's deck.",
				fr: "Pour chacun de vos Fermite en jeu, défaussez la carte du dessus du deck de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vice Grip",
				fr: "Force Poigne",
			},

			damage: 30,

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
