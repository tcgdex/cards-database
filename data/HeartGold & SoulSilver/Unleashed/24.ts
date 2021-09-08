import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Steelix",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		208,
	],
	hp: 120,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Onix",
		fr: "Onix",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guard Press",
				fr: "Pression de garde",
			},
			effect: {
				en: "During your opponent’s next turn, any damage done to Steelix by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à Steelix par des attaques pendant le prochain tour de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steel Swing",
				fr: "Frappe d’acier",
			},
			effect: {
				en: "Flip 2 coins. This attack does 80 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "80×",

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
	retreat: 4,



}

export default card
