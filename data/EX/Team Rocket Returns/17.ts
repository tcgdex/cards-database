import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Raticate",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		20,
	],
	hp: 70,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Rattata",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Dark Seed",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn. Put 5 damage counters on the Defending Pokémon at the end of your opponent's next turn.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spread Poison",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 10,

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
