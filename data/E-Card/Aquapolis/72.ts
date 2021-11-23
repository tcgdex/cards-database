import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Cubone",
		fr: "Osselait"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		104,
	],
	hp: 40,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Teary Eyes",
				fr: "Des larmes dans les yeux"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Cubone by attacks is reduced by 20.",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à Osselait par des attaques sont réduits de 20."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Tackle",
				fr: "Charge"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
