import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Poliwrath",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		62,
	],
	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Poliwhirl",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Strange Spiral",
			},
			effect: {
				en: "Once during your turn (before you attack), if Poliwrath if your Active Pokémon, you may discard a basic Energy card attached to Poliwrath. If you do, the Defending Pokémon is now Confused. This power can't be used if Poliwrath is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Spiral Punch",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 40 damage plus 20 more damage for each heads.",
			},
			damage: 40,

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
