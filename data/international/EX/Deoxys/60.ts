import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'de-de': "Frizelbliz"
	},

	illustrator: "Hiroki Fuchino",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		309,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Recharge",
				'fr-fr': "Recharger",
				'de-de': "Recharge"
			},
			effect: {
				'en-us': "Search your deck for a Lightning Energy card and attach it to Electrike. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck 1 carte Énergie  et attachez-la à Dynavolt. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a  Energy card and attach it to Electrike. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Quick Attack"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage."
			},
			damage: "10+",

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
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85133,
				cardmarket: 276463
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85133,
				cardmarket: 276463
			},
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"],
			thirdParty: {
				tcgplayer: 477612,
				cardmarket: 869533
			},
		},
	],

}

export default card
