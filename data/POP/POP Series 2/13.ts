import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Cacnea",
		fr: "Cacnea"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		331,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sand Attack",
				fr: "Jet de Sable"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent’s next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire"
		},
	],

	retreat: 1
}

export default card
