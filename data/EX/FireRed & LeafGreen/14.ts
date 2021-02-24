import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Slowbro",
	},
	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		80,
	],
	hp: 60,
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
				en: "Strange Behavior",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to Slowbro as long as you don't Knock Out Slowbro. This power can't be used if Slowbro is affected by a Special Condition.",
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
				en: "Psyshock",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
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
