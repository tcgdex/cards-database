import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Rocket's Moltres",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		146,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Wall",
			},
			effect: {
				en: "If an attack does damage to Rocket's Moltres during your opponent's next turn (even if Rocket's Moltres is Knocked Out), Rocket's Moltres attacks your opponent's Active Pokémon for 10 damage. (Apply Weakness and Resistance.)",
			},
			damage: 40,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274148
	}
}

export default card
