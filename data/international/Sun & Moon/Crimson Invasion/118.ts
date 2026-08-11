import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Alolan Exeggutor GX",
		'fr-fr': "Noadkoko d’Alola GX",
		'es-es': "Exeggutor de Alola GX",
		'it-it': "Exeggutor di Alola GX",
		'pt-br': "Exeggutor de Alola GX",
		'de-de': "Alola-Kokowei GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 220,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Tropical Head",
				'fr-fr': "Tête Tropicale",
				'es-es': "Cabezazo Tropical",
				'it-it': "Testata Tropicale",
				'pt-br': "Cabeça Tropical",
				'de-de': "Tropenkopf"
			},
			effect: {
				'en-us': "This attack does 20 damage times the amount of Energy attached to this Pokémon to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à ce Pokémon à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida a este Pokémon a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni Energia assegnata a questo Pokémon. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 pontos de dano vezes a quantidade de Energia ligada a este Pokémon a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 20 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Energien zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Hammer",
				'fr-fr': "Draco-Marteau",
				'es-es': "Martillo Dragón",
				'it-it': "Marteldrago",
				'pt-br': "Martelo Dragão",
				'de-de': "Drachenhammer"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 120,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tower-Go-Round GX",
				'fr-fr': "Manège Dominant GX",
				'es-es': "Carrusel Torre GX",
				'it-it': "Girotondo Spilungone-GX",
				'pt-br': "Carrossel Alto GX",
				'de-de': "Turmreihum GX"
			},
			effect: {
				'en-us': "Move any number of Energy from your Pokémon to your other Pokémon in any way you like. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Déplacez autant de cartes Énergie attachées à vos Pokémon que vous le voulez sur vos autres Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Mueve cualquier cantidad de Energías de tus Pokémon a tus otros Pokémon de la manera que desees. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Distribuisci a piacimento tutte le Energie assegnate ai tuoi Pokémon. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Mova qualquer número de Energia dos seus Pokémon para outros Pokémon seus como desejar (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Verschiebe beliebig viele Energien von deinen Pokémon beliebig auf deine anderen Pokémon. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 311965,
		tcgplayer: 149139
	}
}

export default card
