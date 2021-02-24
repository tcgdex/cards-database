import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Electrode ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Voltorb",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Extra Energy Bomb",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard Electrode ex and all the cards attached to it (this counts as Knocking Out Electrode ex). If you do, search your discard pile for 5 Energy cards and attach them to any of your Pokémon (excluding Pokémon-ex) in any way you like. This power can't be used if Electrode ex is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Crash and Burn",
			},
			effect: {
				en: "You may discard as many Energy as you like attached to your Pokémon in play. If you do, this attack does 30 damage plus 20 more damage for each Energy you discarded.",
			},
			damage: 30,

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
