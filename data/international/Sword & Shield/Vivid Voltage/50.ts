import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [243],

	name: {
		'en-us': "Raikou",
		'fr-fr': "Raikou",
		'es-es': "Raikou",
		'it-it': "Raikou",
		'pt-br': "Raikou",
		'de-de': "Raikou"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Amazing Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
				"Metal",
			],
			name: {
				'en-us': "Amazing Shot",
				'fr-fr': "Coup Magnifique",
				'es-es': "Disparo Increíble",
				'it-it': "Colpo Policromo",
				'pt-br': "Disparo Incrível",
				'de-de': "Atemberaubender Schuss"
			},
			effect: {
				'en-us': "This attack also does 120 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige aussi 120 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque también hace 120 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge anche 120 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque também causa 120 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "This rough Pokémon stores energy inside its body, then sweeps across the land, shooting off electricity."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 511670,
				tcgplayer: 226445
			}
		},
	],
}

export default card
