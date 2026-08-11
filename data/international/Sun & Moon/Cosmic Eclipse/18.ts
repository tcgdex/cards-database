import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Rowlet",
		'fr-fr': "Brindibou",
		'es-es': "Rowlet",
		'it-it': "Rowlet",
		'pt-br': "Rowlet",
		'de-de': "Bauz"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		722,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Skill Dive",
				'fr-fr': "Plongeon Contrôlé",
				'es-es': "Técnica de Buceo",
				'it-it': "Agiltuffo",
				'pt-br': "Mergulho Habilidoso",
				'de-de': "Geübter Sturzflug"
			},
			effect: {
				'en-us': "This attack does 10 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 10 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 10 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 10 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

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
		'en-us': "It sends its feathers, which are as sharp as blades, flying in attack. Its legs are strong, so its kicks are also formidable.",
	},

	thirdParty: {
		cardmarket: 407744,
		tcgplayer: 201173
	}
}

export default card
