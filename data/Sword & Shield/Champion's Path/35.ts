import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Galarian Zigzagoon",
		fr: "Zigzaton de Galar"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Darkness",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pin Missile",
				fr: "Dard-Nuée"
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts pour chaque côté face."
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

	retreat: 2,



}

export default card
