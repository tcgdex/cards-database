import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Raticate",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		20,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Rattata",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Thick Skin",
			},
			effect: {
				en: "Raticate can't be affected by any Special Conditions.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pickup",
			},
			effect: {
				en: "Search your discard pile for a Basic Pokémon (or Evolution card), a Trainer card, and an Energy card. Show them to your opponent and put them into your hand.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 40 more damage.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
