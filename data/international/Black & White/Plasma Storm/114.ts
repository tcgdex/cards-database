import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Bouffalant",
		'fr-fr': "Frison",
		'es-es': "Bouffalant",
		'it-it': "Bouffalant",
		'pt-br': "Bouffalant",
		'de-de': "Bisofank"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		626,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tool Breaker",
				'fr-fr': "Bris’Outil",
			},
			effect: {
				'en-us': "Discard a Pokémon Tool card attached to the Defending Pokémon.",
				'fr-fr': "Défaussez une carte Outil Pokémon attachée au Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncer",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They are known to charge so wildly that if a train were to enter their territory, they would send it flying.",
	},

	thirdParty: {
		cardmarket: 280854,
		tcgplayer: 83946
	}
}

export default card
