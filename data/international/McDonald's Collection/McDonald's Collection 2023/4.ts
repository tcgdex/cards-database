import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		'en-us': "Cetoddle",
		'fr-fr': "Piétacé",
		'es-es': "Cetoddle",
		'it-it': "Cetoddle",
		'pt-br': "Cetoddle",
		'de-de': "Flaniwal"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [974],

	hp: 100,

	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'en-us': "Icicle",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'en-us': "Sharp Fin",
			},
			damage: 50,
		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725421,
				tcgplayer: 516515
			}
		}
	]
}

export default card

