import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	dexId: [255],
	set: Set,

	name: {
		en: "Torchic",
		fr: "Arcko",
		es: "Treecko",
		it: "Treecko",
		pt: "Treecko",
		de: "Geckarbor"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: [
		"Fire"
	],
	weaknesses: [
		{
			type: "Water",
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Firebreathing"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+"
		},
	],
	stage: "Basic",
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89954
			}
		},
	],

}

export default card