import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Hariyama",
		fr: "Hariyama",
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		297,
	],
	hp: 120,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Makuhita",
		fr: "Makuhita",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Thick Fat",
				fr: "Isograisse",
			},
			effect: {
				en: "Any damage done to this Pokémon by attacks from your opponent’s Fire or Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Fire ou Water de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rocket Slap",
				fr: "Baffe Accélérée",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
