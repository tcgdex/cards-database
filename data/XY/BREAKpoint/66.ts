import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Trevenant BREAK",
		fr: "Desséliande TURBO",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		709,
	],
	hp: 160,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Trevenant",
		fr: "Desséliande",
	},
	stage: "BREAK",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Silent Fear",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "Put 3 damage counters on each of your opponent's Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				fr: "Peur Silencieuse",
			},
			effect: {
				fr: "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire.",
			},

		},
	],






}

export default card
