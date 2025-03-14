import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Sandshrew",
		pt: "Sandshrew",
		fr: "Sabelette",
		de: "Sandan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		27,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Sand-attack",
				pt: "Sand-attack",
				fr: "Jet de Sable",
				de: "Sandwirbel"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				pt: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire doit lancer une pièce. Si c'est pile, l'attaque est sans effet.",
				de: "Falls das verteidigende Pokémon während des nächsten gegnerischen Zugs anzugreifen versucht, wirft Dein Gegner eine Münze. Bei 'Zahl' zeigt dieser Angriff keine Wirkung."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "Il s'enterre dans les régions arides et désertiques. Il émerge seulement pour chasser."
	}
}

export default card
