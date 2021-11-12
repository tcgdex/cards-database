import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Sentret",
		fr: "Fouinette"
	},
	illustrator: "Hizuki Misono",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		161,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spy",
				fr: "Espion"
			},
			effect: {
				en: "Look at the top 3 cards of your opponent's deck. Put them back in the same order.",
				fr: "Regardez les 3 cartes du dessus du deck de votre adversaire. Replacez-les dans le même ordre."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Scratch",
				fr: "Double griffe"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces."
			},
			damage: "10×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
