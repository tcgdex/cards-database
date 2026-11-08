import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Dewott",
		'fr-fr': "Mateloutre",
		'es-es': "Dewott",
		'it-it': "Dewott",
		'pt-br': "Dewott",
		'de-de': "Zwottronin"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		502,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Oshawott",
		'fr-fr': "Moustillon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Tail",
				'fr-fr': "Hydroqueue",
			},
			effect: {
				'en-us': "Flip a coin for each Water Energy attached to this Pokémon. This attack does 10 more damage for each heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie Water attachée à ce Pokémon. Cette attaque inflige 10 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Scalchop techniques differ from one Dewott to another. It never neglects maintaining its scalchops.",
	},

	thirdParty: {
		cardmarket: 279767,
		tcgplayer: 84794
	}
}

export default card
