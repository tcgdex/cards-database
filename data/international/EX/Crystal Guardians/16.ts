import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu",
		'de-de': "Jungglut"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		256,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Focus Energy",
				'fr-fr': "Puissance",
				'de-de': "Energiefokus"
			},
			effect: {
				'en-us': "During your next turn, Combusken's High Jump Kick attack's base damage is 70.",
				'fr-fr': "Lors de votre prochain tour, les dégâts de base de l'attaque Pied voltige de Galifeu sont de 70.",
				'de-de': "In deinem nächsten Zug beträgt der Grundschaden des Angriffs Turmkick 70 Schadenspunkte."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "High Jump Kick",
				'fr-fr': "Pied voltige",
				'de-de': "Turmkick"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277097,
		tcgplayer: 84407
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
