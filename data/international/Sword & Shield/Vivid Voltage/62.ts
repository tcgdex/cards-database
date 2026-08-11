import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [871],

	name: {
		'en-us': "Pincurchin",
		'fr-fr': "Wattapik",
		'es-es': "Pincurchin",
		'it-it': "Pincurchin",
		'pt-br': "Pincurchin",
		'de-de': "Britzigel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Spinning Fan",
				'fr-fr': "Hélice Tournante",
				'es-es': "Ventilador Giratorio",
				'it-it': "Vortice Rotante",
				'pt-br': "Ventilador Giratório",
				'de-de': "Wirbeldreher"
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 10 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'es-es': "Picotazo",
				'it-it': "Beccata",
				'pt-br': "Bicada",
				'de-de': "Pikser"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It feeds on seaweed, using its teeth to scrape it off rocks. Electric current flows from the tips of its spines."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511730,
				tcgplayer: 226460
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511730,
				tcgplayer: 226460
			}
		},
	],
}

export default card
