import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Raikou",
		fr: "Raikou",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		243,
	],
	hp: 120,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shining Body",
				fr: "Corps Rayonnant",
			},
			effect: {
				en: "If this Pokémon has any Lightning Energy attached to it, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Si de l'Énergie Lightning est attachée à ce Pokémon, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder Lance",
				fr: "Lance Foudre",
			},
			effect: {
				en: "This attack does 20 more damage for each Lightning Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Lightning attachée à ce Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
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



}

export default card
