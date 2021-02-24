import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Crabominable",
		fr: "Crabominable",
	},
	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		740,
	],
	hp: 140,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Crabrawler",
		fr: "Crabagarre",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Solid Shell",
				fr: "Coquille Dure",
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
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Freezing Punch",
				fr: "Poing Gelant",
			},
			effect: {
				en: "If this Pokémon has any Water Energy attached to it, this attack does 80 more damage.",
				fr: "Si de l’Énergie Water est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
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
