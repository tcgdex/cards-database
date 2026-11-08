import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Palkia EX",
		'fr-fr': "Palkia EX",
		'es-es': "Palkia EX",
		'it-it': "Palkia EX",
		'pt-br': "Palkia EX",
		'de-de': "Palkia EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		484,
	],

	hp: 180,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Aqua Turbo",
				'fr-fr': "Aqua Turbo",
				'es-es': "Turbina de Agua",
				'it-it': "Idroturbina",
				'pt-br': "Aqua Turbo",
				'de-de': "Wasser-Turbo"
			},
			effect: {
				'en-us': "Search your deck for 2 Water Energy cards and attach them to 1 of your Benched Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez jusqu'à 2 cartes Énergie Water dans votre deck et attachez-les à l'un de vos Pokémon de Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas de Energía Water y únelas a 1 de tus Pokémon en Banca. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo fino a due carte Energia Water e assegnale a uno dei tuoi Pokémon in panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho até 2 cards de Energia Water e ligue-os a 1 dos seus Pokémon no Banco. Em seguida, embaralhe seus cards.",
				'de-de': "Du kannst dein Deck nach bis zu 2 Water-Energiekarten durchsuchen und sie an 1 Pokémon auf deiner Bank anlegen. Mische anschließend dein Deck."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Pearl Hurricane",
				'fr-fr': "Ouragan Perle",
				'es-es': "Huracán Perla",
				'it-it': "Uragano Perla",
				'pt-br': "Furacão de Pérolas",
				'de-de': "Perlensturm"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 288206,
		tcgplayer: 111537
	}
}

export default card
