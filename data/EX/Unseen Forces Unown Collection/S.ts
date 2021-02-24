import { Card } from '../../../interfaces'
import Set from '../Unseen Forces Unown Collection'

const card: Card = {
	name: {
		en: "Unown",
	},
	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
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
				en: "Shuffle",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for another Unown and switch it with Unown. (Any cards attached to Unown, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Unown on top of your deck. Shuffle your deck afterward. You can't use more than 1 Shuffle Poké-Power each turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Hidden Power",
			},
			effect: {
				en: "If the Defending Pokémon has a Poké-Power or a Poké-Body, choose up to 2 basic Energy cards attached to 1 of your opponent's Pokémon and attach them to the Defending Pokémon.",
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
