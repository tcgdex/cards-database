import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Dwebble",
		'fr-fr': "Crabicoque",
		'es-es': "Dwebble",
		'it-it': "Dwebble",
		'pt-br': "Dwebble",
		'de-de': "Lithomith"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		557,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Fléau",
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on this Pokémon.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When it finds a stone of a suitable size, it secretes a liquid from its mouth to open up a hole to crawl into.",
	},

	thirdParty: {
		cardmarket: 280671,
		tcgplayer: 85063
	}
}

export default card
