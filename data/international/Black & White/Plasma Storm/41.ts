import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Beartic",
		'fr-fr': "Polagriffe",
		'es-es': "Beartic",
		'it-it': "Beartic",
		'pt-br': "Beartic",
		'de-de': "Siberio"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		614,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Cubchoo",
		'fr-fr': "Polarhume",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Powerful Rage",
				'fr-fr': "Rage Massive",
			},
			effect: {
				'en-us': "Does 20 damage times the number of damage counters on this Pokémon.",
				'fr-fr': "Inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Glacier Drop",
				'fr-fr': "Chute de Glacier",
			},
			effect: {
				'en-us': "Discard the top card of your opponent's deck.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "They love the cold seas of the north. They create pathways around the ocean waters by freezing their own breath.",
	},

	thirdParty: {
		cardmarket: 280781,
		tcgplayer: 83754
	}
}

export default card
