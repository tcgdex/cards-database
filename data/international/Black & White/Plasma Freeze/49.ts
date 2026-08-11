import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Sableye",
		'fr-fr': "Ténéfix",
		'es-es': "Sableye",
		'it-it': "Sableye",
		'pt-br': "Sableye",
		'de-de': "Zobiris"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Cage",
				'fr-fr': "Cage d’Ombre",
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 20,

		},
	],

	retreat: 1,

	description: {
		'en-us': "It hides in the darkness of caves. Its diet of gems has transformed its eyes into gemstones.",
	},

	thirdParty: {
		cardmarket: 280927,
		tcgplayer: 88858
	}
}

export default card
