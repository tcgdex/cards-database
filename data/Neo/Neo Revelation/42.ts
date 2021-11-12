import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Chinchou",
		fr: "Loupio"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		170,
	],

	hp: 50,

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
				en: "Positive Ion",
				fr: "Ion positif"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. Si c'est pile, cette attaque inflige 10 dégâts."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Negative Ion",
				fr: "Ion négatif"
			},
			effect: {
				en: "If the Defending Pokémon attacks Chinchou during your opponent's next turn, any damage done to Chinchou is reduced by 10 (before applying Weakness and Resistance). (Benching either Pokémon ends this effect.)",
				fr: "Si le Pokémon Défenseur attaque Loupio pendant le prochain tour de votre adversaire, les dégâts infligés à Loupio sont réduits de 10 (avant application de la Faiblesse et de la Résistance). (Envoyer l'un des deux Pokémon sur son Banc ou le faire évoluer met fin à cet effet.)"
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Au fond de l'océan, il fait clignoter ses lumières constamment pour communiquer."
	}
}

export default card
