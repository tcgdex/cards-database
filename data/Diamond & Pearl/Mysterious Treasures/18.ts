import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Uxie",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		480,
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
				en: "Memory Out",
			},
			effect: {
				en: "Once during your opponent's turn, if Uxie is damaged by an opponent's attack (even if Uxie is Knocked Out), you may use this power. The Attacking Pokémon can't use that attack during your opponent's next turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Mind Off",
			},
			effect: {
				en: "If you have Mesprit and Azelf in play, this attack does 10 damage plus 20 more damage and the Defending Pokémon is now Asleep.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],





}

export default card
