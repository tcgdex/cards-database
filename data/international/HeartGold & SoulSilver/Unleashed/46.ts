import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Carnivine",
		'fr-fr': "Vortente",
		'de-de': "Venuflibis"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [455],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Drawup Power",
				'fr-fr': "Pouvoir bloquant",
				'de-de': "Kraft aufziehen"
			},
			effect: {
				'en-us': "Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Énergie dans votre deck, montrez-la à votre adversaire, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck anschließend."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Spit Up",
				'fr-fr': "Relâche",
				'de-de': "Entfessler"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It walks around on its tentacles in search of a tree branch where it can dangle down and ambush prey."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84104,
				cardmarket: 279202
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84104,
				cardmarket: 279202
			}
		},
	],

}

export default card
