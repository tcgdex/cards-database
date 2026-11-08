import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		'en-us': "Cetitan",
		'fr-fr': "Balbalèze",
		'es-es': "Cetitan",
		'it-it': "Cetitan",
		'pt-br': "Cetitan",
		'de-de': "Kolowal"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [975],

	hp: 180,

	types: ["Water"],

	stage: "Stage1",

	evolveFrom: {
		'en-us': "Cetoddle",
		'fr-fr': "Piétacé",
		'es-es': "Cetoddle",
		'it-it': "Cetoddle",
		'pt-br': "Cetoddle",
		'de-de': "Flaniwal"
	},

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'en-us': "Hammer In",
			},
			damage: 50,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'en-us': "Sweeping Tackle",
			},
			damage: "200-",
			effect: {
				'en-us': "This attack does 20 less damage for each damage counter on this",
			},
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
			type: 'holo',
			thirdParty: {
				cardmarket: 725422,
				tcgplayer: 516516
			}
		}
	]
}

export default card

