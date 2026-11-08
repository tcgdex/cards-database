import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Simisear",
		'fr-fr': "Flamoutan",
		'es-es': "Simisear",
		'it-it': "Simisear",
		'pt-br': "Simisear",
		'de-de': "Grillchita"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		514,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Pansear",
		'fr-fr': "Flamajou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Water's Power",
				'fr-fr': "Pouvoir Submergeant",
			},
			effect: {
				'en-us': "If this Pokémon has any Water Energy attached to it, the Defending Pokémon is now Asleep.",
				'fr-fr': "Si de l'Énergie Water est attachée à ce Pokémon, le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-Flamme",
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 70,

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
		'en-us': "A flame burns inside its body. It scatters embers from its head and tail to sear its opponents.",
	},

	thirdParty: {
		cardmarket: 279984,
		tcgplayer: 89226
	}
}

export default card
