import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Quilava",
		fr: "Feurisson",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		156,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Cyndaquil",
		fr: "Héricendre",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Mini Eruption",
				fr: "Mini-Éruption",
			},
			effect: {
				en: "Discard the top card of your deck. If that card is an Energy card, this attack does 30 more damage.",
				fr: "Défaussez la carte du dessus de votre deck. Si c'est une carte Énergie, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
