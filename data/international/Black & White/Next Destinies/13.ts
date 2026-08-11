import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Arcanine",
		'fr-fr': "Arcanin",
		'es-es': "Arcanine",
		'it-it': "Arcanine",
		'pt-br': "Arcanine",
		'de-de': "Arkani"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Crunch",
				'fr-fr': "Mâchouille",
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
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
				'en-us': "Heat Blast",
				'fr-fr': "Explosion de Chaleur",
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

	retreat: 3,

	description: {
		'en-us': "Its proud and regal appearance has captured the hearts of people since long ago.",
	},

	thirdParty: {
		cardmarket: 280237,
		tcgplayer: 83589
	}
}

export default card
