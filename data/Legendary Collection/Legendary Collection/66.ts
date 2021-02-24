import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Tentacruel",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		73,
	],
	hp: 60,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Tentacool",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Supersonic",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Jellyfish Sting",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 10,

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
