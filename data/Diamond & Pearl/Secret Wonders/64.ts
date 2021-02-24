import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Shelgon",
		fr: "Drackhaus",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		372,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Bagon",
		fr: "Draby",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Focus Energy",
				fr: "Puissance",
			},
			effect: {
				en: "During your next turn, Shelgon's Protect Charge attack's base damage is 80.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Recharge protectrice de Drackhaus sont de 80.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Protect Charge",
				fr: "Recharge protectrice",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Shelgon by attacks is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Drackhaus par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
