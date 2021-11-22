import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Latios δ",
		fr: "Latios δ ESPÈCES DELTA"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
	],
	hp: 80,
	types: [
		"Lightning",
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Delta Aura",
				fr: "Aura Delta"
			},
			effect: {
				en: "If you have Latias or Latias ex in play, the attack cost of Latios's Psychic Force is now Lightning Metal Colorless.",
				fr: "Si vous avez un Latias ou un Latias ex en jeu, le Coût de l'attaque Force psychique de Latios est maintenant ."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Force",
				fr: "Force psychique"
			},
			effect: {
				en: "If your opponent has no Stage 2 Evolved Pokémon in play, this attack does nothing.",
				fr: "Si votre adversaire n'a pas de Pokémon Évolué de niveau 2 en jeu, cette attaque est sans effet."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
