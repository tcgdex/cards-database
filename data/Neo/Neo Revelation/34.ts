import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Octillery",
		fr: "Octillery"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		224,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Remoraid",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Constrict",
				fr: "Constriction"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Octazooka",
				fr: "Octazooka"
			},
			effect: {
				en: "Flip a coin. If heads, whenever the Defending Pokémon attacks, your opponent flips a coin. If tails that attack does nothing. (Benching or evolving that Pokémon ends this effect.)",
				fr: "Lancez une pièce. Si c'est face, lorsque le Pokémon Défenseur attaque, votre adversaire doit lancer une pièce. Si c'est pile, cette attaque ne fait rien. (Envoyer le Pokémon Défenseur sur son Banc ou le faire évoluer met fin à cet effet.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Il attrape ses ennemis avec les ventouses de ses tentacules et les écrase d'un coup de sa tête dure."
	}
}

export default card
