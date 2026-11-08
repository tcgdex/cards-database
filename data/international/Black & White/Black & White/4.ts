import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Servine",
		'fr-fr': "Lianaja",
		'es-es': "Servine",
		'it-it': "Servine",
		'pt-br': "Servine",
		'de-de': "Efoserp"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		496,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Snivy",
		'fr-fr': "Vipélierre",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Wring Out",
				'fr-fr': "Essorage",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé, et vous défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They avoid attacks by sinking into the shadows of thick foliage. They retaliate with masterful whipping techniques.",
	},

	thirdParty: {
		cardmarket: 279741,
		tcgplayer: 89077
	}
}

export default card
