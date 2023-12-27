import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Lt. Surge's Magneton",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		82,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Charge",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), if Lt. Surge's Magneton is your Active Pokémon, you may take 1 Lightning Energy card attached to 1 of your Pokémon and attach it to Lt. Surge's Magneton. This power can't be used if Lt. Surge's Magneton is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Mega Shock",
			},
			effect: {
				en: "Flip a coin. If tails, Lt. Surge's Magneton does 20 damage to itself.",
			},
			damage: 50,

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
