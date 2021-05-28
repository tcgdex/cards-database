import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Voltorb",
		fr: "Voltorbe"
	},

	illustrator: "Hasegawa Saki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Continuous Tumble",
				fr: "Roulade Continue"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
				fr: "Lancez une pièce jusqu’à obtenir un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 50,
	types: ["Lightning"],
	regulationMark: "D"
}

export default card
