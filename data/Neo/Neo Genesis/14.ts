import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Slowking",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		199,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Slowpoke",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Mind Games",
			},
			effect: {
				en: "Whenever your opponent plays a Trainer card, you may flip a coin. If heads, that card does nothing. Put it on top of your opponent's deck. This power can't be used if Slowking is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Mind Blast",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokémon is now Confused. If tails, this attack does 20 damage.",
			},
			damage: 20,

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
