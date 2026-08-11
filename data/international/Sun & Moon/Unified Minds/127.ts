import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Alolan Grimer",
		'fr-fr': "Tadmorv d’Alola",
		'es-es': "Grimer de Alola",
		'it-it': "Grimer di Alola",
		'pt-br': "Grimer de Alola",
		'de-de': "Alola-Sleima"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Collect",
				'fr-fr': "Collecte",
				'es-es': "Coleccionar",
				'it-it': "Tassa",
				'pt-br': "Coleta",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'es-es': "Roba 2 cartas.",
				'it-it': "Pesca due carte.",
				'pt-br': "Compre 2 cartas.",
				'de-de': "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Bomb",
				'fr-fr': "Bomb-Beurk",
				'es-es': "Bomba Lodo",
				'it-it': "Fangobomba",
				'pt-br': "Bomba de Lodo",
				'de-de': "Matschbombe"
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "There are a hundred or so of them living in Alola's waste-disposal site. They're all hard workers who eat a lot of trash.",
	},

	thirdParty: {
		cardmarket: 388427,
		tcgplayer: 195091
	}
}

export default card
