import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Suicune",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		245,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Legendary Body",
			},
			effect: {
				en: "As long as Suicune is your Active Pokémon, Suicune and Energy cards attached to it aren't affected by effects from Trainer cards other than Trainer cards other than Stadium cards. As long as this power is active, discard all Trainer cards attached to Suicune. (This power works even if Suicune is Asleep, Confused, or Paralyzed.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Crystal Wave",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, this attack does 30 damage and, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
