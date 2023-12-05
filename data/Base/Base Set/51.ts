import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Koffing",
		fr: "Smogo",
		de: "Smogon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		109,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Foul Gas",
				fr: "Gaz infect",
				de: "Fäulnisgas"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, it is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné ; si c'est pile, il est maintenant Confus.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon vergiftet; bei 'Zahl' verwirrt."
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

	description: {
		fr: "Son corps, constitué de gaz toxiques et instables, peut exploser soudainement."
	}
}

export default card
