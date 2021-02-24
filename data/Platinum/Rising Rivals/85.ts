import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Turtwig GL",
		fr: "Tortipouss  Niv. 20",
	},
	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		387,
	],
	hp: 90,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Overgrow",
				fr: "Engrais",
			},
			effect: {
				en: "As long as Turtwig 's remaining HP is 60 or less, each of Turtwig 's attacks does 30 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Tant qu'il ne reste à Tortipouss  qu'un maximum de 60 PV, chacune de ses attaques inflige 30 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Drain",
				fr: "Giga-sangsue",
			},
			effect: {
				en: "After your attack, remove from Turtwig the number of damage counters equal to the damage you did to the Defending Pokémon.",
				fr: "Après votre attaque, retirez à Tortipouss  autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
			},
			damage: 30,

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
			type: "Water",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
