import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Latios",
		'fr-fr': "Latios",
		'es-es': "Latios",
		'it-it': "Latios",
		'pt-br': "Latios",
		'de-de': "Latios"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
	],
	hp: 110,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Break Through",
				'fr-fr': "Percée",
				'es-es': "Abrir Paso",
				'it-it': "Irruzione",
				'pt-br': "Atravessar",
				'de-de': "Eine Bresche schlagen"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lagoon Flight",
				'fr-fr': "Survol du Lagon",
				'es-es': "Vuelo Laguna",
				'it-it': "Volo Lagunare",
				'pt-br': "Sobrevoar a Laguna",
				'de-de': "Lagunenflug"
			},

			damage: 70,

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
		'en-us': "A highly intelligent Pokémon. By folding back its wings in flight, it can overtake jet planes.",
	},
}

export default card
