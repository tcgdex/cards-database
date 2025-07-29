import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Caterpie",
		fr: "Chenipan",
		es: "Caterpie",
		it: "Caterpie",
		pt: "Caterpie",
		de: "Raupy"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		10,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nap",
				fr: "Tit’Sieste",
				es: "Siesta",
				it: "Pausa",
				pt: "Soneca",
				de: "Nickerchen"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
				es: "Cura 20 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 20 danni.",
				pt: "Cure 20 pontos de dano deste Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				es: "Roer",
				it: "Rosicchiamento",
				pt: "Roída",
				de: "Nagen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 295306
	}
}

export default card
