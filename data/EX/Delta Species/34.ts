import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Castform",
	},
	illustrator: "Miki Tanaka",
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
				en: "Holon Draw",
			},
			effect: {
				en: "Draw a card. If Castform has any Holon Energy cards attached to it, draw 2 more cards.",
			},

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
