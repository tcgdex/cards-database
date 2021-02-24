import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Metang",
		fr: "Métang",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		375,
	],
	hp: 90,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Beldum",
		fr: "Terhal",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Bullet Punch",
				fr: "Pisto-Poing",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 20,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
