import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Arcanine",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		59,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Growlithe",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fire Veil",
			},
			effect: {
				en: "If Arcanine is your Active Pokémon and is damaged by an opponent's attack (even if Arcanine is Knocked Out), the Attacking Pokémon is now Burned.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Burn Up",
			},
			effect: {
				en: "Flip a coin. If tails, discard all Fire Energy cards attached to Arcanine.",
			},
			damage: 60,

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
