import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Vibrava",
		fr: "Vibraninf Niv. 36",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		329,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Trapinch",
		fr: "Kraknoix",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Typhoon",
				fr: "Énergy typhon",
			},
			effect: {
				en: "Does 20 damage times the number of Energy cards in your opponent's discard pile. Then, put those Energy cards on top of your opponent's deck. Your opponent shuffles his or her deck afterward.",
				fr: "Inflige 20 dégâts multipliés par le nombre de cartes Énergie dans la pile de défausse de votre adversaire. Ensuite, placez ces cartes Énergie au dessus du deck de votre adversaire. Celui-ci mélange ensuite son deck.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
