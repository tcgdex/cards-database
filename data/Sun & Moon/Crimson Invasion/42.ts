import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Grumpig",
		fr: "Groret",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		326,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Own Tempo",
				fr: "Tempo Perso",
			},
			effect: {
				en: "This Pokémon can't be Confused.",
				fr: "Ce Pokémon ne peut pas être Confus.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psych Up",
				fr: "Boost",
			},
			effect: {
				en: "During your next turn, this Pokémon's Psych Up attack does 60 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Boost de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
