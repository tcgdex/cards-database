import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Barraskewda",
		'fr-fr': "Hastacuda",
		'es-es': "Barraskewda",
		'it-it': "Barraskewda",
		'pt-br': "Barraskewda",
		'de-de': "Barrakiefa"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [847],
	set: Set,
	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Arrokuda",
		'fr-fr': "Embrochet",
		'es-es': "Arrokuda",
		'it-it': "Arrokuda",
		'pt-br': "Arrokuda",
		'de-de': "Pikuda"
	},

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Targeted Skewer",
				'fr-fr': "Cible Transpercée",
				'es-es': "Ensarta Direccionada",
				'it-it': "Spiedo Mirato",
				'pt-br': "Espeto na Mira",
				'de-de': "Gezielter Spieß"
			},
			effect: {
				'en-us': "This attack does 20 damage to 1 of your opponent's Benched Pokémon for each damage counter on that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire pour chaque marqueur de dégâts sur ce Pokémon-là. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival por cada contador de daño en ese Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon in panchina del tuo avversario per ogni segnalino danno su quel Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente para cada contador de dano naquele Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners für jede Schadensmarke auf jenem Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Jet Headbutt",
				'fr-fr': "Bélier Volant",
				'es-es': "Turbocabezazo",
				'it-it': "Zuccata Jet",
				'pt-br': "Cabeçada a Jato",
				'de-de': "Flinke Kopfnuss"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "This Pokémon has a jaw that's as sharp as a spear and as strong as steel. Apparently Barraskewda's flesh is surprisingly tasty, too."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511630,
				tcgplayer: 226427
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511630,
				tcgplayer: 226427
			}
		},
	],
}

export default card
