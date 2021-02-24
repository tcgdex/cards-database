import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Sunny Castform",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		351,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Temperamental Weather",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for Castform, Rain Castform, or Snow-cloud Castform and switch it with Sunny Castform. (Any cards attached to Sunny Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Sunny Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Sunshine",
			},
			effect: {
				en: "Search your discard pile for a Stadium card, show it to your opponent, and put it into your hand.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sunburn",
			},
			effect: {
				en: "If High Pressure System is in play, the Defending Pokémon is now Burned.",
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
