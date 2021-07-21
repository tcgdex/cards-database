import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Shaymin ◇",
		fr: "Shaymin ◇",
		es: "Shaymin ◇",
		it: "Shaymin ◇",
		pt: "Shaymin ◇",
		de: "Shaymin ◇"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		492,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Flower Storm",
				fr: "Tempête de Fleurs",
				es: "Tormenta de Flores",
				it: "Tempesta Floreale",
				pt: "Tempestade Floral",
				de: "Blütensturm"
			},
			effect: {
				en: "This attack does 30 damage times the amount of basic Energy attached to all of your Pokémon.",
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies de base attachées à tous vos Pokémon.",
				es: "Este ataque hace 30 puntos de daño por cada Energía Básica unida a todos tus Pokémon.",
				it: "Questo attacco infligge 30 danni per ogni Energia base assegnata ai tuoi Pokémon.",
				pt: "Este ataque causa 30 pontos de dano vezes a quantidade de Energia básica ligada a todos os seus Pokémon.",
				de: "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der an alle deine Pokémon angelegten Basis-Energien zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				fr: "Tempête de Fleurs",
			},
			effect: {
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies de base attachées à tous vos Pokémon.",
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
