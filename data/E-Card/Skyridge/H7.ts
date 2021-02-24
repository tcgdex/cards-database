import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Flareon",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 70,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Self Healing",
			},
			effect: {
				en: "Whenever you attach a Fire Energy card from your hand to Flareon, remove all Special Conditions affecting Flareon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Singe",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Burn Booster",
			},
			effect: {
				en: "Discard an Energy card attached to Flareon in order to use this attack. If the discarded card is a Energy card, this attack does 40 damage plus 10 more damage.",
			},
			damage: 40,

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
