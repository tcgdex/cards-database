import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Tentacruel",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		73,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Tentacool",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Strange Tentacles",
			},
			effect: {
				en: "Once during your turn (before your attack), as long as the number of Energy cards attached to the Defending Pokémon is less than the number of Energy cards attached to your Active Pokémon, you may choose an Energy card, if any, in your opponent's discard pile and attach it to the Defending Pokémon. This power can't be used if Tentacruel is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Poison Sting",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			},

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
