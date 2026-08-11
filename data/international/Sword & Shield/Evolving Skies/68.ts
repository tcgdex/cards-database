import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Woobat",
		'fr-fr': "Chovsourir",
		'es-es': "Woobat",
		'it-it': "Woobat",
		'pt-br': "Woobat",
		'de-de': "Fleknoil"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Yuka Morii",

	attacks: [{
		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'es-es': "Coleccionar",
			'it-it': "Tassa",
			'pt-br': "Collect",
			'de-de': "Sammeln"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Draw a card.",
			'de-de': "Ziehe 1 Karte."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Gnaw",
			'de-de': "Nagen"
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,

	description: {
		'en-us': "It emits ultrasonic waves as it flutters about, searching for its prey—bug Pokémon."
	},

	dexId: [527],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574116,
				tcgplayer: 246843
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574116,
				tcgplayer: 246843
			}
		},
	],
}

export default card
