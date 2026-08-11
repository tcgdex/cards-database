import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Archen",
		'fr-fr': "Arkéapti",
		'es-es': "Archen",
		'it-it': "Archen",
		'pt-br': "Archen",
		'de-de': "Flapteryx"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		566,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "RESTORED",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Rock Throw",
				'fr-fr': "Jet-Pierres",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Acrobatics",
				'fr-fr': "Acrobatie",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Said to be an ancestor of bird Pokémon, they were unable to fly and moved about by hopping from one branch to another.",
	},

	thirdParty: {
		cardmarket: 280189,
		tcgplayer: 83607
	}
}

export default card
