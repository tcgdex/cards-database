import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Metang",
		fr: "Metang"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		375,
	],
	hp: 80,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Beldum",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Clear Body",
				fr: "Corps sain"
			},
			effect: {
				en: "Metang can't be affected by any Special Conditions.",
				fr: "Metang ne peut pas être affecté par des États Spéciaux."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Extra Comet Punch",
				fr: "Poing météore"
			},
			effect: {
				en: "During your next turn, Extra Comet Punch does 30 damage plus 30 more damage.",
				fr: "Lors de votre prochain tour, Poing météore inflige 30 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
