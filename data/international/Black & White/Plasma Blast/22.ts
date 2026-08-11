import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Glalie",
		'fr-fr': "Oniglali",
		'es-es': "Glalie",
		'it-it': "Glalie",
		'pt-br': "Glalie",
		'de-de': "Firnontor"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		362,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Powder Snow",
				'fr-fr': "Poudreuse",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reflect Energy",
				'fr-fr': "Renvoi d'Énergie",
			},
			effect: {
				'en-us': "Move a Water Energy from this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie Water de ce Pokémon vers 1 de vos Pokémon de Banc.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It prevents prey from escaping by instantaneously freezing moisture in the air.",
	},

	thirdParty: {
		cardmarket: 281043,
		tcgplayer: 85757
	}
}

export default card
