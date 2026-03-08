import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Flying Pikachu",
		fr: "Pikachu volant"
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
				en: "Thundershock",
				fr: "Éclair"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
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
				en: "Fly",
				fr: "Vol"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Flying Pikachu; if tails, this attack does nothing (not even damage).",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Pikachu volant ; si c'est pile, cette attaque ne fait rien (pas même de dégâts)."
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

	description: {
		fr: "En apprenant à voler, Pikachu a surpassé sa faiblesse contre le Pokémon Combat."
	},

	variants: [
		{
			type: "normal",
			stamp: ["pikachu-tail"]
		},
		{
			type: "normal",
		}
	]
}

export default card
