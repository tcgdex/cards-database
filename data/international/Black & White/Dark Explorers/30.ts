import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Glaceon",
		'fr-fr': "Givrali",
		'es-es': "Glaceon",
		'it-it': "Glaceon",
		'pt-br': "Glaceon",
		'de-de': "Glaziola"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		471,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-Attaque"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Reflect Energy",
				'fr-fr': "Renvoi d'Énergie"
			},
			effect: {
				'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie de ce Pokémon vers 1 de vos Pokémon de Banc."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "By controlling its body heat, it can freeze the atmosphere around it to make a diamond-dust flurry.",
	},

	thirdParty: {
		cardmarket: 280358,
		tcgplayer: 85747
	}
}

export default card
