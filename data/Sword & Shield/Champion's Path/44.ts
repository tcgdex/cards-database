import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Inkay",
		fr: "Sepiatop"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Tackle",
				fr: "Charge"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Attack from Behind",
				fr: "Attaque Traîtresse"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Confused, this attack does 50 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 50 dégâts supplémentaires."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
