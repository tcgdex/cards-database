import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Trevenant",
		fr: "Desséliande",
	},
	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		709,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Phantump",
		fr: "Brocélôme",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Eerie Wave",
				fr: "Vague Étrange",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Wood Hammer",
				fr: "Martobois",
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 20 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
