import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Seaking",
		fr: "Poissoroy"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		119,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Goldeen",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Rising Lunge",
				fr: "Botte secrète"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. Si c'est pile, cette attaque inflige 10 dégâts."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Horn Swipe",
				fr: "Koud'korne"
			},
			effect: {
				en: "Flip 2 coins. If both are heads, this attack does 20 damage plus 40 more damage. If 1 or both are tails, this attack does 20 damage.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 faces, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires. Si vous obtenez au moins 1 pile, cette attaque inflige 20 dégâts."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "À l'aide de sa corne, il perce des trous dans les rochers situés au fond des rivières, afin d'y faire un nid pour éviter que ses œufs soient emportés par le courant."
	}
}

export default card
