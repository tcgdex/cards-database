import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Gothita",
		fr: "Scrutella"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Fortunate Eye",
				fr: "Regard Chanceux"
			},
			effect: {
				en: "Look at the top 5 cards of your opponent’s deck and put them back in any order.",
				fr: "Regardez les 5 cartes du dessus du deck de votre adversaire, puis replacez-les dans l’ordre de votre choix."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Gentle Slap",
				fr: "Gifle Douce"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
