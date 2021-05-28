import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Binacle",
		fr: "Opermine"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dual Chop",
				fr: "Double Baffe"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts pour chaque côté face."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 80,
	types: ["Fighting"],
	regulationMark: "D"
}

export default card
