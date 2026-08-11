import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Wailord",
		'fr-fr': "Wailord",
		'es-es': "Wailord",
		'it-it': "Wailord",
		'pt-br': "Wailord",
		'de-de': "Wailord"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		321,
	],

	hp: 200,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Impact",
				'fr-fr': "Gros Impact",
				'es-es': "Impacto Pesado",
				'it-it': "Impatto Pesante",
				'pt-br': "Impacto Pesado",
				'de-de': "Schwerer Einschlag"
			},

			damage: 90,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Splash",
				'fr-fr': "Hydro-Éclaboussure",
				'es-es': "Hidroestallido",
				'it-it': "Idrosplash",
				'pt-br': "Hidroborrifada",
				'de-de': "Hydroplatscher"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "They eat so many fish Pokémon that when Wailord become too numerous, fishermen have to chase them off.",
	},

	thirdParty: {
		cardmarket: 407879,
		tcgplayer: 201222
	}
}

export default card
