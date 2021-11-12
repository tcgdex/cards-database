import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Magnemite",
		fr: "Magneti"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Wave",
				fr: "Cage-Éclair"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Selfdestruct",
				fr: "Destruction"
			},
			effect: {
				en: "Does 10 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magnemite does 40 damage to itself.",
				fr: "Inflige 10 dégâts à chaque Pokémon sur le Banc de chaque joueur. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon sur le Banc.) Magneti s'inflige 40 dégâts."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Il contrôle la gravité pour pouvoir voler. Il attaque avec des Cages-Éclair."
	}
}

export default card
