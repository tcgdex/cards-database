import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
		'es-es': "Lairon",
		'it-it': "Lairon",
		'pt-br': "Lairon",
		'de-de': "Stollrak"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		305,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Aron",
		'fr-fr': "Galekid",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Metal Claw",
				'fr-fr': "Griffe Acier",
			},

			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Iron Head",
				'fr-fr': "Tête de Fer",
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 50,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Lairon fight over territory, and when their steel bodies collide, sparks fly.",
	},

	thirdParty: {
		cardmarket: 281079,
		tcgplayer: 86585
	}
}

export default card
