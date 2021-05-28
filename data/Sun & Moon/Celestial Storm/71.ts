import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Onix",
		fr: "Onix",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		95,
	],
	hp: 100,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Screech",
				fr: "Grincement",
			},
			effect: {
				en: "During your next turn, the Defending Pokémon takes 20 more damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, le Pokémon Défenseur subit 20 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
