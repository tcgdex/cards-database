import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Passimian",
		'fr-fr': "Quartermac",
		'es-es': "Passimian",
		'it-it': "Passimian",
		'pt-br': "Passimian",
		'de-de': "Quartermak"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		766,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Fling",
				'fr-fr': "Dégommage",
				'es-es': "Lanzamiento",
				'it-it': "Lancio",
				'pt-br': "Arremessar",
				'de-de': "Schleuder"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Team Play",
				'fr-fr': "Jeu d’Équipe",
				'es-es': "Juego en Equipo",
				'it-it': "Giocosquadra",
				'pt-br': "Jogo em Equipe",
				'de-de': "Teamgeist"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each of your Benched Passimian.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Quartermac sur votre Banc.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada uno de tus Passimian en Banca.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Passimian nella tua panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Passimian no seu Banco.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Quartermak auf deiner Bank zu."
			},
			damage: "10+",

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
		'en-us': "They form groups of roughly 20 individuals. Their mutual bond is remarkable—they will never let down a comrade.",
	},

	thirdParty: {
		cardmarket: 295384,
		tcgplayer: 126945
	}
}

export default card
