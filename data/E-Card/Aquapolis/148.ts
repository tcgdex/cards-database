import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Kingdra",
	},
	illustrator: "Mikio Menjo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		230,
	],
	hp: 110,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Seadra",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
			},
			effect: {
				en: "Whenever you attach a Water, Lightning, or Psychic basic Energy card from your hand to Kingdra, Kingdra's type (color) becomes the same as that Energy card type until the end of the turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Water",
				"Water",
			],
			name: {
				en: "Aquabomb",
			},
			effect: {
				en: "Kingdra does 10 damage to itself. (Don't apply Weakness or Resistance when Kingdra damages itself with this attack.)",
			},
			damage: 40,

		},
		{
			cost: [
				"Lightning",
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Dual Burn",
			},
			effect: {
				en: "Flip 2 coins. For each tails, discard 1 Energy card attached to Kingdra.",
			},
			damage: 60,

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
