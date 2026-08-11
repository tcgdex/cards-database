import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'de-de': "Voltobal"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [100],

	hp: 40,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Recharge",
				'fr-fr': "Recharger",
				'de-de': "Recharge"
			},
			effect: {
				'en-us': "Search your deck for a Lightning Energy card and attach it to Voltorb. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Énergie  et attachez-la à Voltorbe. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a  Energy card and attach it to Voltorb. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Rolling Attack",
				'fr-fr': "Attaque qui roule",
				'de-de': "Rolling Attack"
			},

			damage: 20,

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
				tcgplayer: 90413,
				cardmarket: 276154
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90413,
				cardmarket: 276154
			}
		},
	]
}

export default card
