import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Sunny Castform",
	},
	illustrator: "Miki Tanaka",
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
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Holon Search",
			},
			effect: {
				en: "Search your deck for a Holon Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			},

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
