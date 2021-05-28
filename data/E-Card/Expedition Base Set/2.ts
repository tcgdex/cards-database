import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Ampharos",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		181,
	],
	hp: 100,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Flaaffy",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Connect",
			},
			effect: {
				en: "Once during your turn (before you attack), you make take one basic Energy cards attached to one of your Benched Pokémon and attach it to your Active Pokémon. This power can't be used if Ampharos is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lightning Strike",
			},
			effect: {
				en: "You may discard all Energy cards attached to Ampharos. If you do, this attack's base damage is 80 instead of 40.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
