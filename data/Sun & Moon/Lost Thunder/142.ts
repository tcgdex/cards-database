import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Dedenne",
		fr: "Dedenne",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		702,
	],
	hp: 70,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Zzzap Touch",
				fr: "Contact Zzzap",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused. If tails, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Confus. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
