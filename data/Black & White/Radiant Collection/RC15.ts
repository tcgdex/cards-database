import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Meowstic",
		es: "Meowstic",
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		678,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Espurr",
		es: "Espurr",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Ear Influence",
				es: "Influencia Auditiva",
			},
			effect: {
				en: "Move as many damage counters on your opponent's Pokémon as you like to any of your opponent's other Pokémon in any way you like.",
				es: "Mueve tantos contadores de daño como quieras de los Pokémon de tu rival a cualquiera de los otros Pokémon de tu rival de la manera que desees.",
			},
		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psychic",
				es: "Psíquico",
			},
			effect: {
				en: "This attack does 10 more damage for each Energy attached to your opponent's Active Pokémon.",
				es: "Este ataque hace 10 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			},

			damage: "60+",
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Intense silence. Two lamplights. Keep waiting for night to end.",
		es: "Absoluto silencio. Dos luces. Esperando a que acabe la noche.",
	},

	thirdParty: {
		tcgplayer: 113757
	}
}

export default card
