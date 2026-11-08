import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Spheal",
		'fr-fr': "Obalie de Team Aqua",
		'de-de': "Team Aquas Seemops"
	},

	illustrator: "Nakaoka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [363],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Rollout"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Trance",
				'fr-fr': "Aqua-transe",
				'de-de': "Aqua Trance"
			},
			effect: {
				'en-us': "At the end of your opponent's next turn, the Defending Pokémon is now Asleep.",
				'fr-fr': "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur est Endormi.",
				'de-de': "At the end of your opponent's next turn, the Defending Pokémon is now Asleep."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275834,
				tcgplayer: 89802
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275834,
				tcgplayer: 89802
			}
		},
	],

}

export default card
