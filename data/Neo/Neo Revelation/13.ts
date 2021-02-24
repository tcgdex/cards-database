import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Raikou",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		243,
	],
	hp: 80,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Lightning Burst",
			},
			effect: {
				en: "Whenever you attach a Lightning Energy card from your hand to Raikou, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. This power stops working while Raikou is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Lightning Tackle",
			},
			effect: {
				en: "Flip a coin. If tails, Raikou does 20 damage to itself.",
			},
			damage: 50,

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
