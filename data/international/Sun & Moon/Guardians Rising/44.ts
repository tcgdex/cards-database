import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Heliolisk",
		'fr-fr': "Iguolta",
		'es-es': "Heliolisk",
		'it-it': "Heliolisk",
		'pt-br': "Heliolisk",
		'de-de': "Elezard"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		695,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Helioptile",
		'fr-fr': "Galvaran",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-Attaque",
				'es-es': "Ataque Rápido",
				'it-it': "Attacco Rapido",
				'pt-br': "Ataque Rápido",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Raging Thunder",
				'fr-fr': "Tonnerre Déchaîné",
				'es-es': "Trueno Rabioso",
				'it-it': "Rombotuono",
				'pt-br': "Trovão Devastador",
				'de-de': "Tosender Donner"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l’un de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei tuoi Pokémon in panchina. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a 1 dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They flare their frills and generate energy. A single Heliolisk can generate sufficient electricity to power a skyscraper.",
	},

	thirdParty: {
		cardmarket: 297506,
		tcgplayer: 130946
	}
}

export default card
