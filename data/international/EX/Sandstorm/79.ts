import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
		'de-de': "Eneco"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [300],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Catch",
				'fr-fr': "Attrape-énergie",
				'de-de': "Energy Catch"
			},
			effect: {
				'en-us': "Search your discard pile for a basic Energy card, show it to your opponent, and put it into your hand.",
				'fr-fr': "Choisissez dans votre pile de défausse une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main.",
				'de-de': "Search your discard pile for a basic Energy card, show it to your opponent, and put it into your hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-edge",
				'fr-fr': "Damoclès",
				'de-de': "Double-Edge"
			},
			effect: {
				'en-us': "Skitty does 10 damage to itself.",
				'fr-fr': "Skitty s'inflige 10 dégâts.",
				'de-de': "Skitty does 10 damage to itself."
			},
			damage: 30,

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
				cardmarket: 275856,
				tcgplayer: 89262
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275856,
				tcgplayer: 89262
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125132
			}
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"],
			thirdParty: {
				cardmarket: 871814,
				tcgplayer: 477432
			}
		}
	],

}

export default card
