import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Crabominable",
		fr: "Crabominable",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		740,
	],
	hp: 140,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Crabrawler",
		fr: "Crabagarre",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fight Alone",
				fr: "Combat Solitaire",
			},
			effect: {
				en: "If you have fewer Pokémon in play than your opponent, this attack does 50 more damage for each Pokémon fewer you have in play.",
				fr: "Si vous avez moins de Pokémon en jeu que votre adversaire, cette attaque inflige 50 dégâts supplémentaires pour chaque Pokémon de moins que vous avez en jeu.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnum Punch",
				fr: "Poing Magnum",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
