import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [649],

	name: {
		'en-us': "Genesect",
		'fr-fr': "Genesect",
		'es-es': "Genesect",
		'it-it': "Genesect",
		'pt-br': "Genesect",
		'de-de': "Genesect"
	},

	illustrator: "kawayoo",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Linear Attack",
				'fr-fr': "Attaque Linéaire",
				'es-es': "Ataque Lineal",
				'it-it': "Attacco Lineare",
				'pt-br': "Ataque Linear",
				'de-de': "Linearer Angriff"
			},
			effect: {
				'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Techno Blast",
				'fr-fr': "Techno-Buster",
				'es-es': "Tecno Shock",
				'it-it': "Tecnobotto",
				'pt-br': "Rajada Tecnológica",
				'de-de': "Techblaster"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon can't attack.",
				'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
				'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
				'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "This Pokémon existed 300 million years ago. Team Plasma altered it and attached a cannon to its back."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 511500,
				tcgplayer: 226380
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511500,
				tcgplayer: 226380
			}
		},
	],
}

export default card
