import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
		'es-es': "Lampent",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'de-de': "Laternecto"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		608,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Litwick",
		'fr-fr': "Funécire",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard an Energy attached to this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 40,

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
		'en-us': "It arrives near the moment of death and steals spirit from the body.",
	},

	thirdParty: {
		cardmarket: 280244,
		tcgplayer: 86588
	}
}

export default card
