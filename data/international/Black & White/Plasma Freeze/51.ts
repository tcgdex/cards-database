import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Metang",
		'fr-fr': "Métang",
		'es-es': "Metang",
		'it-it': "Metang",
		'pt-br': "Metang",
		'de-de': "Metang"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		375,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psy Bolt",
				'fr-fr': "Choc Mental",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psypunch",
				'fr-fr': "Coup de Poing Psy",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is formed by two Beldum joining together. Its two brains are linked, amplifying its psychic power.",
	},

	thirdParty: {
		cardmarket: 280929,
		tcgplayer: 87383
	}
}

export default card
