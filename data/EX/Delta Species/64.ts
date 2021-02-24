import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Ditto",
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		132,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Duplicate",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for another Ditto and switch it with Ditto. (Any cards attached to Ditto, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Ditto on top of your deck. Shuffle your deck afterward. You can't use more than 1 Duplicate Poké-Power each turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
			},
			effect: {
				en: "Remove 3 damage counters from Ditto (all if there are less than 3).",
			},
			damage: 20,

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
