import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Swoobat",
		fr: "Rhinolove",
	},
	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		528,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Woobat",
		fr: "Chovsourir",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wave Amplification",
				fr: "Amplification d'Onde",
			},
			effect: {
				en: "During your next turn, this Pokémon's Returning Echo attack does 60 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Écho de Retour de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Returning Echo",
				fr: "Écho de Retour",
			},
			effect: {
				en: "Flip a coin. If tails, return this Pokémon and all cards attached to it to your hand.",
				fr: "Lancez une pièce. Si c'est pile, reprenez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
