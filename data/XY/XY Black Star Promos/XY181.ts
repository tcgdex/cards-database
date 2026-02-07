import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Crobat BREAK",
		fr: "Nostenfer TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
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
		en: "Crobat",
		fr: "Nostenfer"
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
				en: "Silent Bite",
				fr: "Morsure Silencieuse"
			},
			effect: {
				en: "You may leave your opponent's Active Pokémon Paralyzed. If you do, shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Vous pouvez laisser le Pokémon Actif de votre adversaire Paralysé. Si c'est le cas, mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck."
			},
			damage: 60,

		},
	],

	thirdParty: {
		cardmarket: 295170
	}
}

export default card
