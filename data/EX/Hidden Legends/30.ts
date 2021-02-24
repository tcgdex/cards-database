import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Castform",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		351,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Temperamental Weather",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for Sunny Castform, Rain Castform, or Snow-cloud Castform and switch it with Castform. (Any cards attached to Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Forecast",
			},
			effect: {
				en: "Search your deck for a Stadium card and play it. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extra Ball",
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 20 damage plus 20 more damage.",
			},
			damage: 20,

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
