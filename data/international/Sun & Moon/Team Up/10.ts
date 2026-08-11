import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Shaymin ◇",
		'fr-fr': "Shaymin ◇",
		'es-es': "Shaymin ◇",
		'it-it': "Shaymin ◇",
		'pt-br': "Shaymin ◇",
		'de-de': "Shaymin ◇"
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
				'en-us': "Flower Storm",
				'fr-fr': "Tempête de Fleurs",
				'es-es': "Tormenta de Flores",
				'it-it': "Tempesta Floreale",
				'pt-br': "Tempestade Floral",
				'de-de': "Blütensturm"
			},
			effect: {
				'en-us': "This attack does 30 damage times the amount of basic Energy attached to all of your Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies de base attachées à tous vos Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño por cada Energía Básica unida a todos tus Pokémon.",
				'it-it': "Questo attacco infligge 30 danni per ogni Energia base assegnata ai tuoi Pokémon.",
				'pt-br': "Este ataque causa 30 pontos de dano vezes a quantidade de Energia básica ligada a todos os seus Pokémon.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der an alle deine Pokémon angelegten Basis-Energien zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'fr-fr': "Tempête de Fleurs",
			},
			effect: {
				'fr-fr': "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies de base attachées à tous vos Pokémon.",
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

	retreat: 0,

	description: {
		'en-us': "The blooming of Gracidea flowers confers the power of flight upon it. Feelings of gratitude are the message it delivers.",
	},

	thirdParty: {
		cardmarket: 368943
	}
}

export default card
