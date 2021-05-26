import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Charizard",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 110,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Charmeleon",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
			},
			effect: {
				en: "Whenever you attach a Fire, Lightning, or Fighting basic Energy card from your hand to Charizard, Charizard's type (color) becomes the same as that type of energy until the end of the turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fire",
				"Fire",
			],
			name: {
				en: "Fireblast",
			},
			effect: {
				en: "Discard an Energy card attached to Charizard.",
			},
			damage: 40,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Dragon Tail",
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
