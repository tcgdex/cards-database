import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Koga's Beedrill",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kakuna",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Nerve Poison",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Needle",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. Either way, you can't use this attack again as long as Koga's Beedrill stays in play (even putting Koga's Beedrill on the Bench won't let you use it again).",
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274277
	}
}

export default card
