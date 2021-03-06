import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Hypno",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		97,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Drowzee",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sleep Pendulum",
			},
			effect: {
				en: "Once during your turn (before your attack), if Hypno is your Active Pokémon, you may use this power. The Defending Pokémon is now Asleep. This power can't be used if Hypno is affected by a Special Condition.",
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
				en: "Spiral Aura",
			},
			effect: {
				en: "Unless this attack Knocks Out the Defending Pokémon, if your opponent has any Benched Pokémon you may choose 1 of them and switch it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
			},
			damage: 30,

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
