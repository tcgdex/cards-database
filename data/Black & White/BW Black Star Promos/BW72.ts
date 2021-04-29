import { Card } from '../../../interfaces'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		en: "Cobalion",
		fr: "Cobaltium",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		638,
	],
	hp: 120,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Justified",
				fr: "Cœur Noble",
			},
			effect: {
				en: "Each of this Pokémon's attacks does 50 more damage to Darkness Pokémon (before applying Weakness and Resistance).",
				fr: "Chaque attaque de ce Pokémon inflige 50 dégâts supplémentaires aux Pokémon Darkness (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Iron Head",
				fr: "Tête de Fer",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
