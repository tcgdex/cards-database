import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		'en-us': "Pangoro",
		'fr-fr': "Pandarbare",
		'es-es': "Pangoro",
		'it-it': "Pangoro",
		'pt-br': "Pangoro",
		'de-de': "Pandagro"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [675],

	hp: 140,

	types: ["Darkness"],

	stage: "Stage1",

	evolveFrom: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'it-it': "Pancham",
		'pt-br': "Pancham",
		'de-de': "Pam-Pam"
	},

	attacks: [
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: {
				'en-us': "Knocking Hammer",
			},
			effect: {
				'en-us': "Discard the top card of your opponent's deck."
			},
			damage: 90,
		},
		{
			cost: ["Darkness", "Darkness", "Darkness", "Colorless"],
			name: {
				'en-us': "Shakedown",
			},
			effect: {
				'en-us': "Discard a random card from your opponent's hand."
			},
			damage: 150,
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670478,
				tcgplayer: 281505
			}
		}
	]
}

export default card

