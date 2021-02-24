import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Mewtwo δ",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 70,
	types: [
		"Fire",
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Delta Switch",
			},
			effect: {
				en: "Once during your turn, when you put Mewtwo from your hand onto your Bench, you may move any number of basic Energy cards attached to your Pokémon to your other Pokémon (excluding Mewtwo) in any way you like.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Metal",
			],
			name: {
				en: "Energy Burst",
			},
			effect: {
				en: "Does 10 damage times the total amount of Energy attached to Mewtwo and the Defending Pokémon.",
			},
			damage: 10,

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
