import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Ledian",
		'fr-fr': "Coxyclaque",
		'es-es': "Ledian",
		'it-it': "Ledian",
		'pt-br': "Ledian",
		'de-de': "Ledian"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		166,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Ledyba",
		'fr-fr': "Coxy",
		'es-es': "Ledyba",
		'it-it': "Ledyba",
		'pt-br': "Ledyba",
		'de-de': "Ledyba"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Mach Punch",
				'fr-fr': "Mach Punch",
				'es-es': "Ultrapuño",
				'it-it': "Pugnorapido",
				'pt-br': "Soco Mach",
				'de-de': "Tempohieb"
			},
			effect: {
				'en-us': "This attack does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 10 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 10 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Esse ataque causa 10 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

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
		'en-us': "When the stars flicker in the night sky, it flutters about, scattering a glowing powder.",
	},

	thirdParty: {
		cardmarket: 281344,
		tcgplayer: 86696
	}
}

export default card
