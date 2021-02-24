import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Swadloon",
		fr: "Couverdure",
	},
	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		541,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Sewaddle",
		fr: "Larveyette",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Swaddling Leaves",
				fr: "Feuillage Enveloppant",
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bug Bite",
				fr: "Piqûre",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
