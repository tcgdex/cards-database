import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Swellow",
		fr: "Heledelle"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		277,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Tailow",
		fr: "Nirondelle"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Focus Energy",
				fr: "Puissance"
			},
			effect: {
				en: "During your next turn, base damage of Swellow’s Agility is 70 instead of 30.",
				fr: "Lors de votre prochain tour, la base des dégâts d'Hâte d'Heledelle est de 70 au lieu de 30."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Swellow during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Heledelle lors du prochain tour de votre adversaire."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277429,
		tcgplayer: 89690
	}
}

export default card
