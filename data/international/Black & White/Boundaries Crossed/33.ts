import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'es-es': "Psyduck",
		'it-it': "Psyduck",
		'pt-br': "Psyduck",
		'de-de': "Enton"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Firefighting",
				'fr-fr': "Anti-Flammes",
			},
			effect: {
				'en-us': "Discard a Fire Energy attached to the Defending Pokémon.",
				'fr-fr': "Défaussez une Énergie Fire attachée au Pokémon Défenseur.",
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "When headaches stimulate its brain cells, which are usually inactive, it can use a mysterious power.",
	},

	thirdParty: {
		cardmarket: 280619,
		tcgplayer: 88442
	}
}

export default card
