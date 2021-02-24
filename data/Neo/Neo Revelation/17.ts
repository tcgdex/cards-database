import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Entei",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		244,
	],
	hp: 60,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Legendary Body",
			},
			effect: {
				en: "As long as Entei is your Active Pokémon, Entei and Energy cards attached to it aren't affected by effects from Trainer cards other than Trainer cards other than Stadium cards. As long as this power is active, discard all Trainer cards attached to Entei. (This power works even if Entei is Asleep, Confused, or Paralyzed.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Mega Flame",
			},
			effect: {
				en: "Flip 2 coins. For each tails, discard 1 Energy card from Entei, if it has any.",
			},
			damage: 50,

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
