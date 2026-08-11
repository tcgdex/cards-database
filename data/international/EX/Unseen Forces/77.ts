import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Teddiursa",
		'fr-fr': "Teddiursa",
		'de-de': "Teddiursa"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		216,
	],

	hp: 40,

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
				'en-us': "Teary Eyes",
				'fr-fr': "Des larmes dans les yeux",
				'de-de': "Teary Eyes"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Teddiursa by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, les dégâts infligés à Teddiursa par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "During your opponent's next turn, any damage done to Teddiursa by attacks is reduced by 20 (after applying Weakness and Resistance)."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Scratch"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89857,
				cardmarket: 276723
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89857,
				cardmarket: 276723
			},
		}
	],
}

export default card
