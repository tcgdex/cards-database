import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Marowak",
		fr: "Ossatueur",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Cubone",
		fr: "Tragosso",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Heavy Bone",
				fr: "Os lourd",
			},
			effect: {
				en: "Flip a coin. If tails, Marowak can't use Heavy Bone during your next turn.",
				fr: "Lancez une pièce. Si c'est pile, Ossatueur ne peut pas utiliser Os lourd lors de votre prochain tour.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Bone Rush",
				fr: "Charge-os",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 50 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
