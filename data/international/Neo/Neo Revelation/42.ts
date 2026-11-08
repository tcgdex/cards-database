import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'de-de': "Lampi"
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
				'en-us': "Positive Ion",
				'fr-fr': "Ion positif",
				'de-de': "Positive Ion"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, this attack does 10 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. Si c'est pile, cette attaque inflige 10 dégâts.",
				'de-de': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, this attack does 10 damage."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Negative Ion",
				'fr-fr': "Ion négatif",
				'de-de': "Negative Ion"
			},
			effect: {
				'en-us': "If the Defending Pokémon attacks Chinchou during your opponent's next turn, any damage done to Chinchou is reduced by 10 (before applying Weakness and Resistance). (Benching either Pokémon ends this effect.)",
				'fr-fr': "Si le Pokémon Défenseur attaque Loupio pendant le prochain tour de votre adversaire, les dégâts infligés à Loupio sont réduits de 10 (avant application de la Faiblesse et de la Résistance). (Envoyer l'un des deux Pokémon sur son Banc ou le faire évoluer met fin à cet effet.)",
				'de-de': "If the Defending Pokémon attacks Chinchou during your opponent´s next turn, any damage done to Chinchou is reduced by 10 (before applying Weakness and Resistance). (Benching or evolving either Pokémon ends this effect.)"
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
	retreat: 1,


	description: {
		'en-us': "On the dark ocean floor, its only means of communication is its constantly flashing lights.",
		'fr-fr': "Au fond de l'océan, il fait clignoter ses lumières constamment pour communiquer."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274628,
				tcgplayer: 84299
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274628,
				tcgplayer: 84299
			}
		}
	]
}

export default card

