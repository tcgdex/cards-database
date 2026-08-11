import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Scatterbug",
		'fr-fr': "Lépidonille",
		'es-es': "Scatterbug",
		'it-it': "Scatterbug",
		'pt-br': "Scatterbug",
		'de-de': "Purmel"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		664,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bug Bite",
				'fr-fr': "Piqûre",
				'es-es': "Picadura",
				'it-it': "Coleomorso",
				'pt-br': "Picada",
				'de-de': "Käferbiss"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When under attack from bird Pokémon, it spews a poisonous black powder that causes paralysis on contact.",
	},

	thirdParty: {
		cardmarket: 281352,
		tcgplayer: 88943
	}
}

export default card
