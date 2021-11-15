import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Jynx δ",
		fr: "Lippoutou δ ESPÈCES DELTA"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		124,
	],
	hp: 60,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Stages of Evolution",
				fr: "Niveaux d'Évolution"
			},
			effect: {
				en: "As long as Jynx is an Evolved Pokémon, you pay Colorless less to retreat your Fire and Psychic Pokémon.",
				fr: "Tant que Lippoutou est un Pokémon Évolué, vous payez 1  de moins pour faire battre en retraite vos Pokémon  et ."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Punch",
				fr: "Poing de feu"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
