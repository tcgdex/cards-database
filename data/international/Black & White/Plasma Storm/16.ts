import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Monferno",
		'fr-fr': "Chimpenfeu",
		'es-es': "Monferno",
		'it-it': "Monferno",
		'pt-br': "Monferno",
		'de-de': "Panpyro"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		391,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Chimchar",
		'fr-fr': "Ouisticram",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Loud Howl",
				'fr-fr': "Hurlement Tonitruant",
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Tail Slap",
				'fr-fr': "Coup de Queue Enflammé",
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 50,

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
		'en-us': "It skillfully controls the intensity of the fire on its tail to keep its foes at an ideal distance.",
	},

	thirdParty: {
		cardmarket: 280756,
		tcgplayer: 87573
	}
}

export default card
