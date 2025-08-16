import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Palkia EX",
		fr: "Palkia EX",
		es: "Palkia EX",
		it: "Palkia EX",
		pt: "Palkia EX",
		de: "Palkia EX"
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
				en: "Aqua Turbo",
				fr: "Aqua Turbo",
				es: "Turbina de Agua",
				it: "Idroturbina",
				pt: "Aqua Turbo",
				de: "Wasser-Turbo"
			},
			effect: {
				en: "Search your deck for 2 Water Energy cards and attach them to 1 of your Benched Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 cartes Énergie Water dans votre deck et attachez-les à l'un de vos Pokémon de Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas de Energía Water y únelas a 1 de tus Pokémon en Banca. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo fino a due carte Energia Water e assegnale a uno dei tuoi Pokémon in panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho até 2 cards de Energia Water e ligue-os a 1 dos seus Pokémon no Banco. Em seguida, embaralhe seus cards.",
				de: "Du kannst dein Deck nach bis zu 2 Water-Energiekarten durchsuchen und sie an 1 Pokémon auf deiner Bank anlegen. Mische anschließend dein Deck."
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
				en: "Pearl Hurricane",
				fr: "Ouragan Perle",
				es: "Huracán Perla",
				it: "Uragano Perla",
				pt: "Furacão de Pérolas",
				de: "Perlensturm"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
