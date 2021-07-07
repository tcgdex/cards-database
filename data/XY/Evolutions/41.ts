import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Electabuzz",
		fr: "Élektek",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		125,
	],
	hp: 70,
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
				en: "Thunder Shock",
				fr: "Éclair",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Punch",
				fr: "Poing-Éclair",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage. If tails, this Pokémon does 10 damage to itself.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires. Si c'est pile, ce Pokémon s'inflige 10 dégâts.",
			},
			damage: "30+",

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
	retreat: 2,



}

export default card
