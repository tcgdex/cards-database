import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Deoxys ex",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		386,
	],
	hp: 110,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Form Change",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for another Deoxys ex and switch it with Deoxys ex. (Any cards attached to Deoxys ex, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys ex on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Burst",
			},
			effect: {
				en: "You may discard 2 Energy attached to Deoxys ex. If you do, this attack does 50 damage plus 20 more damage for each Energy attached to the Defending Pokémon.",
			},
			damage: 50,

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
