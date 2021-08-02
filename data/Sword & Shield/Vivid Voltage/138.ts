import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Rayquaza",
		fr: "Rayquaza",
		es: "Rayquaza",
		it: "Rayquaza",
		pt: "Rayquaza",
		de: "Rayquaza"
	},

	illustrator: "5ban Graphics",
	rarity: "Amazing",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
				"Fighting",
			],
			name: {
				en: "Amazing Burst",
				fr: "Rafale Magnifique",
				es: "Explosión Increíble",
				it: "Scoppio Policromo",
				pt: "Explosão Incrível",
				de: "Atemberaubender Ausbruch"
			},
			effect: {
				en: "Discard all basic Energy from this Pokémon. This attack does 80 damage for each type of basic Energy you discarded in this way.",
				fr: "Défaussez toute l’Énergie de base de ce Pokémon. Cette attaque inflige 80 dégâts pour chaque type d’Énergie de base défaussée de cette façon.",
				es: "Descarta todas las Energías Básicas de este Pokémon. Este ataque hace 80 puntos de daño por cada tipo de Energía Básica que hayas descartado de esta manera.",
				it: "Scarta tutte le Energie base da questo Pokémon. Questo attacco infligge 80 danni per ogni tipo di Energia base che hai scartato in questo modo.",
				pt: "Descarte todas as Energias básicas deste Pokémon. Este ataque causa 80 pontos de dano para cada tipo de Energia básica descartada desta forma.",
				de: "Lege alle Basis-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jeden auf diese Weise abgelegten Basis-Energietyp 80 Schadenspunkte zu."
			},
			damage: "80×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
