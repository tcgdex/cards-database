import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Rocket's Hitmonchan",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		107,
	],
	hp: 60,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Tyrogue",
	},
	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Crosscounter",
			},
			effect: {
				en: "If an attack does damage to Rocket's Hitmonchan during your opponent's next turn (even if Rocket's Hitmonchan is Knocked Out), flip a coin. If heads, Rocket's Hitmonchan attacks your opponent's Active Pokémon for double that amount of damage. (If Rocket's Hitmonchan takes 20 damage, it does 40 damage to that Pokémon.)",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Magnum Punch",
			},

			damage: 50,

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
