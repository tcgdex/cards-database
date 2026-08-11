import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [145],

	name: {
		'en-us': "Zapdos",
		'fr-fr': "Électhor",
		'es-es': "Zapdos",
		'it-it': "Zapdos",
		'pt-br': "Zapdos",
		'de-de': "Zapdos"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Drill Peck",
				'fr-fr': "Bec Vrille",
				'es-es': "Pico Taladro",
				'it-it': "Perforbecco",
				'pt-br': "Bico Broca",
				'de-de': "Bohrschnabel"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Snipe",
				'fr-fr': "Tir Éclair",
				'es-es': "Tiro Atronador",
				'it-it': "Tuonomira",
				'pt-br': "Disparo Trovão",
				'de-de': "Donnerschütze"
			},
			effect: {
				'en-us': "Discard all Energy from this Pokémon, and this attack does 160 damage to 1 of your opponent's Pokémon V or Pokémon-GX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez toute l'Énergie de ce Pokémon. Cette attaque inflige 160 dégâts à l'un des Pokémon-V ou Pokémon-GX de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Descarta todas las Energías de este Pokémon, y este ataque hace 160 puntos de daño a 1 de los Pokémon V o Pokémon-GX de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Scarta tutte le Energie da questo Pokémon. Questo attacco infligge 160 danni a un Pokémon-V o a un Pokémon-GX del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Descarte todas as Energias deste Pokémon e este ataque causará 160 pontos de dano a 1 dos Pokémon V ou Pokémon-GX do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel und diese Attacke fügt 1 Pokémon-V oder Pokémon-GX deines Gegners 160 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "A legendary Pokémon that is said to live in thunderclouds. It freely controls lightning bolts."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 511660,
				tcgplayer: 226439
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 874539
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511660,
				tcgplayer: 226439
			}
		},
	],
}

export default card
