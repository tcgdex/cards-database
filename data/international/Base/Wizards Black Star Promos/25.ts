import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Flying Pikachu",
		'fr-fr': "Pikachu volant"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
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
				'en-us': "Thundershock",
				'fr-fr': "Éclair"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fly",
				'fr-fr': "Vol"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Flying Pikachu; if tails, this attack does nothing (not even damage).",
				'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Pikachu volant ; si c'est pile, cette attaque ne fait rien (pas même de dégâts)."
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "By learning how to fly, Pikachu overcame its weakness to Fighting Pokémon.",
		'fr-fr': "En apprenant à voler, Pikachu a surpassé sa faiblesse contre le Pokémon Combat."
	},

	variants: [
		{
			type: "normal",
			stamp: ["pikachu-tail"],
			thirdParty: {
				tcgplayer: 161749
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85534
			},
		}
	]
}

export default card
