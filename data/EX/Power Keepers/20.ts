import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Omastar",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		139,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Omanyte",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pull Down",
			},
			effect: {
				en: "If your opponent has any Evolved Pokémon in play, remove the highest Stage Evolution card from each of them and put those cards back into his or her hand.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydrocannon",
			},
			effect: {
				en: "Does 30 damage plus 20 more damage for each Water Energy attached to Omastar but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
