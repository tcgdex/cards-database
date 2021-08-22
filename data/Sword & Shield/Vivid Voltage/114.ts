import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Forretress",
		fr: "Foretress",
		es: "Forretress",
		it: "Forretress",
		pt: "Forretress",
		de: "Forstellka"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Pineco",
		fr: "Pomdepik"
	},

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				es: "Derribo",
				it: "Riduttore",
				pt: "Desmantelar",
				de: "Bodycheck"
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 30 dégâts.",
				es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 30 danni a se stesso.",
				pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 120,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double KO",
				fr: "Double K.O.",
				es: "Doble Noqueo",
				it: "Doppio KO",
				pt: "Abate Duplo",
				de: "Doppel-K.-o."
			},
			effect: {
				en: "Both Active Pokémon are Knocked Out.",
				fr: "Les deux Pokémon Actifs sont mis K.O.",
				es: "Ambos Pokémon Activos quedan Fuera de Combate.",
				it: "Entrambi i Pokémon attivi vengono messi KO.",
				pt: "Ambos os Pokémon Ativos são Nocauteados.",
				de: "Beide Aktiven Pokémon werden kampfunfähig."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "In the moment that it gulps down its prey, the inside of its shell is exposed, but to this day, no one has ever seen that sight."
	}
}

export default card
