import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		102,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bullet Seed",
				fr: "Balle Graine",
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
