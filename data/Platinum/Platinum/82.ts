import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Mareep",
		fr: "Wattouat",
		de: "Voltilamm"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		179,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Minor Errand-Running",
				fr: "Rendez-vous mineur",
				de: "Minor Errand-Running"
			},
			effect: {
				en: "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Énergie de base. Montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				de: "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Expand",
				fr: "Pousstoidla",
				de: "Expand"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Mareep by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Wattouat par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				de: "During your opponent's next turn, any damage done to Mareep by attacks is reduced by 10 (after applying Weakness and Resistance)."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278503
	}
}

export default card
