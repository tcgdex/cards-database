import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Necrozma",
		fr: "Necrozma",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		800,
	],
	hp: 130,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Barrier Attack",
				fr: "Attaque d’Obstacle",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Special Laser",
				fr: "Laser Spécial",
			},
			effect: {
				en: "If this Pokémon has any Special Energy attached to it, this attack does 60 more damage.",
				fr: "Si de l’Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 100,

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
