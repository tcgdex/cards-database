import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
		'es-es': "Larvesta",
		'it-it': "Larvesta",
		'pt-br': "Larvesta",
		'de-de': "Ignivor"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		636,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Super Singe",
				'fr-fr': "Super Roussi"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The base of volcanoes is where they make their homes. They shoot fire from their five horns to repel attacking enemies.",
	},

	thirdParty: {
		cardmarket: 280348,
		tcgplayer: 86630
	}
}

export default card
