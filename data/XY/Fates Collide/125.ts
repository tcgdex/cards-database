import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Alakazam-EX",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		65,
	],
	hp: 160,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Kinesis",
			},
			effect: {
				en: "When you play M Alakazam-EX from your hand to evolve this Pokémon, before it evolves, you may put 2 damage counters on your opponent's Active Pokémon and 3 damage counters on 1 of your opponent's Benched Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Suppression",
			},
			effect: {
				en: "Put 3 damage counters on each of your opponent's Pokémon that has any Energy attached to it.",
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
