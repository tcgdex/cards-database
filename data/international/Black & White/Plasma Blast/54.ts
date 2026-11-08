import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Archeops",
		'fr-fr': "Aéroptéryx",
		'es-es': "Archeops",
		'it-it': "Archeops",
		'pt-br': "Archeops",
		'de-de': "Aeropteryx"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		567,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Archen",
		'fr-fr': "Arkéapti",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Acrobatics",
				'fr-fr': "Acrobatie",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Swift Dive",
				'fr-fr': "Vive Plongée",
			},
			effect: {
				'en-us': "If this Pokémon's remaining HP is 50 or less, this attack's base damage is 50.",
				'fr-fr': "S'il reste 50 PV ou moins à ce Pokémon, les dégâts de base de cette attaque sont de 50.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It runs better than it flies. It takes off into the sky by running at a speed of 25 mph.",
	},

	thirdParty: {
		cardmarket: 281075,
		tcgplayer: 83611
	}
}

export default card
