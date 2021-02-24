import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Trumbeak",
		fr: "Piclairon",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		732,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Pikipek",
		fr: "Picassaut",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bullet Seed",
				fr: "Balle Graine",
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
