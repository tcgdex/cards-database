import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		40,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Jiggylypuff",
		fr: "Rondoudou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Slap",
				fr: "Torgnoles",
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Expand",
				fr: "Pousstoidla",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Wigglytuff by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à Grodoudou par des attaques pendant le prochain tour de votre adversaire sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
