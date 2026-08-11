import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Floette",
		'fr-fr': "Floette",
	},

	illustrator: "Midori Harada",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		670,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Flabébé",
		'fr-fr': "Flabébé",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Aromatherapy",
				'fr-fr': "Aromathérapie",
			},
			effect: {
				'en-us': "Heal 30 damage from each of your Pokémon.",
				'fr-fr': "Soignez 30 dégâts à chacun de vos Pokémon.",
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
			],
			name: {
				'en-us': "Magical Leaf",
				'fr-fr': "Feuille Magik",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage and heal 20 damage from this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et vous soignez 20 dégâts à ce Pokémon.",
			},
			damage: "20＋",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When the flowers of a well-tended flower bed bloom, it appears and celebrates with an elegant dance.",
	},

	thirdParty: {
		cardmarket: 291580
	}
}

export default card
