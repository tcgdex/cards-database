import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Geodude",
		fr: "Racaillou"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		74,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Stone Barrage",
				fr: "Barrage de pierre"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que ce soit pile. Cette attaque inflige 10 dégâts multipliés par le nombre de faces."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Il vit dans les plaines et les montagnes. On le confond souvent avec un petit caillou."
	}
}

export default card
