import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Carnivine",
		'fr-fr': "Vortente",
		'es-es': "Carnivine",
		'it-it': "Carnivine",
		'pt-br': "Carnivine",
		'de-de': "Venuflibis"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		455,
	],

	hp: 90,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Chomp Chomp",
				'fr-fr': "Mangeouille",
				'es-es': "Ñam Ñam",
				'it-it': "Mastica Bene",
				'pt-br': "Nhoc Nhoc",
				'de-de': "Mampfen"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
				'es-es': "Cura 20 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni.",
				'pt-br': "Cure 20 pontos de dano deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Loom Over",
				'fr-fr': "Menacer",
				'es-es': "Cernirse",
				'it-it': "Presenza Minacciosa",
				'pt-br': "Pairar Sobre",
				'de-de': "Schattenseite"
			},
			effect: {
				'en-us': "This attack does 10 less damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte weniger mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "90-",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down.",
	},

	thirdParty: {
		cardmarket: 315944,
		tcgplayer: 157629
	}
}

export default card
