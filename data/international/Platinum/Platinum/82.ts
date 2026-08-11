import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
		'de-de': "Voltilamm"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [179],

	hp: 60,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Minor Errand-Running",
				'fr-fr': "Rendez-vous mineur",
				'de-de': "Minor Errand-Running"
			},
			effect: {
				'en-us': "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Énergie de base. Montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Expand",
				'fr-fr': "Pousstoidla",
				'de-de': "Expand"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Mareep by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous dégâts infligés à Wattouat par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "During your opponent's next turn, any damage done to Mareep by attacks is reduced by 10 (after applying Weakness and Resistance)."
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

	description: {
		'en-us': "Its fluffy coat swells to double when static electricity builds up. Touching it can be shocking."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 87203,
				cardmarket: 278503
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278503,
				tcgplayer: 87203
			}
		}
	],

}

export default card
