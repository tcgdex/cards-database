import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Ash's Pikachu",
		'fr-fr': "Pikachu de Sacha",
	},
	illustrator: "2017 Pikachu Project",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		25,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Agility",
				'fr-fr': "Hâte",
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder",
				'fr-fr': "Fatal-Foudre",
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon does 20 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 20 dégâts.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "This form of Pikachu is somewhat rare. It wears the hat of its Trainer, who is also its partner.",
	},
}

export default card
