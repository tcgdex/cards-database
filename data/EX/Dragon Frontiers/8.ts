import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Ninetales δ",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Vulpix",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Volunteer",
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove 4 damage counters from Ninetales and discard Ninetales from Vulpix. If you do, search your deck for Ninetales or Ninetales ex and put it onto Vulpix (this counts as evolving Vulpix). Shuffle your deck afterward.",
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
				en: "Trick Tail",
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to 1 of your Pokémon.",
			},
			damage: 30,

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
