import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Haunter",
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		93,
	],
	hp: 50,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gastly",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Call Back",
			},
			effect: {
				en: "Put a Baby Pokémon or Basic Pokémon card from your opponent's discard pile onto his or her Bench. Put 1 damage counter on that Pokémon. (You can't use this attack if your Bench is full.)",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Surround",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon can't retreat during your opponent's next turn.",
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
