import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
		'es-es': "Porygon2",
		'it-it': "Porygon2",
		'pt-br': "Porygon2",
		'de-de': "Porygon2"
	},

	illustrator: "HiRON",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		233,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Destructive Beam",
				'fr-fr': "Rayon Désintégrateur",
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It was upgraded to enable the exploration of other planets. However, it failed to measure up.",
	},

	thirdParty: {
		cardmarket: 281094,
		tcgplayer: 88329
	}
}

export default card
