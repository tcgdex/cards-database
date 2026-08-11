import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Mawile EX",
		'fr-fr': "Mysdibule EX",
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		303,
	],

	hp: 150,

	types: [
		"Fairy",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Smack",
				'fr-fr': "Claque",
			},

			damage: 20,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				'en-us': "Wonder Bomb",
				'fr-fr': "Bombe Miracle",
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 100,

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

	retreat: 2,

	thirdParty: {
		cardmarket: 290096
	}
}

export default card
