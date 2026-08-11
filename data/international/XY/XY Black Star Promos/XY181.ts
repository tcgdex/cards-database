import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Crobat BREAK",
		'fr-fr': "Nostenfer TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		169,
	],

	hp: 160,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Crobat",
		'fr-fr': "Nostenfer"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Silent Bite",
				'fr-fr': "Morsure Silencieuse"
			},
			effect: {
				'en-us': "You may leave your opponent's Active Pokémon Paralyzed. If you do, shuffle this Pokémon and all cards attached to it into your deck.",
				'fr-fr': "Vous pouvez laisser le Pokémon Actif de votre adversaire Paralysé. Si c'est le cas, mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck."
			},
			damage: 60,

		},
	],

	thirdParty: {
		cardmarket: 295170
	}
}

export default card
