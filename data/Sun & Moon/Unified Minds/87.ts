import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Cresselia",
		fr: "Cresselia",
		es: "Cresselia",
		it: "Cresselia",
		pt: "Cresselia",
		de: "Cresselia"
	},
	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		488,
	],
	hp: 130,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Gain",
				fr: "Puissance Boréale",
				es: "Ganar Aurora",
				it: "Prendiaurora",
				pt: "Aurora",
				de: "Aurora-Verstärkung"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Luminous Blade",
				fr: "Lame Lumineuse",
				es: "Cuchilla Brillante",
				it: "Lamalucente",
				pt: "Lâmina Luminosa",
				de: "Leuchtende Klinge"
			},
			effect: {
				en: "Discard a Psychic Energy from this Pokémon.",
				fr: "Défaussez une Énergie Psychic de ce Pokémon.",
				es: "Descarta 1 Energía Psychic de este Pokémon.",
				it: "Scarta un’Energia Psychic assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia Psychic deste Pokémon.",
				de: "Lege 1 Psychic-Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

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
