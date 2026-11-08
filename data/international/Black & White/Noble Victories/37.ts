import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Emolga",
		'fr-fr': "Emolga",
		'es-es': "Emolga",
		'it-it': "Emolga",
		'pt-br': "Emolga",
		'de-de': "Emolga"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		587,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Electrichain",
				'fr-fr': "Électrichaîne",
			},
			effect: {
				'en-us': "Does 20 more damage if you have any Lightning Pokémon on your Bench.",
				'fr-fr': "Inflige 20 dégâts supplémentaires si vous avez un Pokémon Lightning sur votre Banc.",
			},
			damage: 10,

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
		'en-us': "They live on treetops and glide using the inside of a cape-like membrane while discharging electricity.",
	},

	thirdParty: {
		cardmarket: 280160,
		tcgplayer: 85189
	}
}

export default card
