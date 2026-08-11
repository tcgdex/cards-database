import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Deino",
		'fr-fr': "Solochi",
		'es-es': "Deino",
		'it-it': "Deino",
		'pt-br': "Deino",
		'de-de': "Kapuno"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		633,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'Boule",
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They cannot see, so they tackle and bite to learn about their surroundings. Their bodies are covered in wounds.",
	},

	thirdParty: {
		cardmarket: 280200,
		tcgplayer: 84728
	}
}

export default card
