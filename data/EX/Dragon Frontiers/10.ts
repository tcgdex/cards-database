import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Snorlax δ",
		fr: "Ronflex δ ESPÈCES DELTA"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		143,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Bedhead",
				fr: "Tête de lit"
			},
			effect: {
				en: "As long as Snorlax remains Asleep between turns, put 2 damage counters on 1 of the Defending Pokémon.",
				fr: "Tant que Ronflex est Endormi entre deux tours, placez 2 marqueurs de dégât sur 1 des Pokémon Défenseurs."
			},
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
