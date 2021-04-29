import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Amoonguss",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		591,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Foongus",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bursting Spores",
			},
			effect: {
				en: "Whenever you play a Pokémon that has the Spore attack from your hand during your turn, you may leave your opponent's Active Pokémon Asleep and Poisoned.",
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
				en: "Venoshock",
			},
			effect: {
				en: "If your opponent's Active Pokémon is Poisoned, this attack does 70 more damage.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
