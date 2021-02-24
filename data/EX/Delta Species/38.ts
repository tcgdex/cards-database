import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Ditto",
	},
	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		132,
	],
	hp: 60,
	types: [
		"Psychic",
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
				"Colorless",
			],
			name: {
				en: "Copy",
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. Copy copies that attack. This attack does nothing if Ditto doesn't have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Ditto performs that attack.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
