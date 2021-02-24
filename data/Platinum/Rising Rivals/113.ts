import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Flying Pikachu",
		fr: "Pikachu volant Niv. 12",
	},
	illustrator: "Toshinao Aoki",
	rarity: "Rare",
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
				fr: "Éclair",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
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
				fr: "Vol",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of an attack, including damage, done to Flying Pikachu during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Pikachu volant lors du prochain tour de votre adversaire.",
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
