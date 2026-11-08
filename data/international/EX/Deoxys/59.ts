import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'de-de': "Frizelbliz"
	},

	illustrator: "Naoyo Kimura",
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
				'en-us': "High Voltage",
				'fr-fr': "Haut voltage",
				'de-de': "High Voltage"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent can't play Trainer cards from his or her hand during his or her next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur de sa main lors de son prochain tour.",
				'de-de': "Flip a coin. If heads, your opponent can't play Trainer cards from his or her hand during his or her next turn."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Rogne",
				'de-de': "Gnaw"
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

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85132,
				cardmarket: 276462
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85132,
				cardmarket: 276462
			},
		},
	],

}

export default card
