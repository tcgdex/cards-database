import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Palpitoad",
		'fr-fr': "Batracné",
		'es-es': "Palpitoad",
		'it-it': "Palpitoad",
		'pt-br': "Palpitoad",
		'de-de': "Mebrana"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		536,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Tympole",
		'fr-fr': "Tritonde"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Bubble Beam",
				'fr-fr': "Bulles d'O"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It lives in the water and on land. It uses its long, sticky tongue to capture prey.",
	},

	thirdParty: {
		cardmarket: 280360,
		tcgplayer: 87923
	}
}

export default card
