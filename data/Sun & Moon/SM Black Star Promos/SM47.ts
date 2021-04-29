import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Crabominable",
		fr: "Crabominable",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
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


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Gutsy Hammer",
				fr: "Marteau Courageux",
			},
			effect: {
				en: "This Pokémon does 10 damage to itself for each damage counter on it.",
				fr: "Ce Pokémon s’inflige 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 80,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Double Stomp",
				fr: "Double Écrasement",
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
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
