import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Vanillite",
		'fr-fr': "Sorbébé",
		'es-es': "Vanillite",
		'it-it': "Vanillite",
		'pt-br': "Vanillite",
		'de-de': "Gelatini"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		582,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Jump On",
				'fr-fr': "Saut",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			},
			damage: 20,

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
		'en-us': "Theoretically, this Pokémon formed from icicles bathed in energy from the morning sun. Their breath is -58° F.",
	},

	thirdParty: {
		cardmarket: 280905,
		tcgplayer: 90272
	}
}

export default card
