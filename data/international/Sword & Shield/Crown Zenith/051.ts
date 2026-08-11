import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [737],
	set: Set,

	name: {
		'en-us': "Radiant Charjabug",
		'fr-fr': "Chrysapile Radieux",
		'es-es': "Charjabug Radiante",
		'it-it': "Charjabug Lucente",
		'pt-br': "Charjabug Radiante",
		'de-de': "Strahlendes Akkup"
	},

	illustrator: "Mizue",
	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Shocking Block",
			'fr-fr': "Bloc Choquant",
			'es-es': "Bloqueo Descarga",
			'it-it': "Bloccoshock",
			'pt-br': "Bloqueio Eletrizante",
			'de-de': "Schockblock"
		},

		effect: {
			'en-us': "Whenever any player attaches an Energy card from their hand to 1 of their Pokémon V, put 2 damage counters on that Pokémon.",
			'fr-fr': "Chaque fois qu'un joueur attache une carte Énergie de sa main à l'un de ses Pokémon-V, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
			'es-es': "Cada vez que algún jugador una 1 carta de Energía de su mano a 1 de sus Pokémon V, pon 2 contadores de daño en ese Pokémon.",
			'it-it': "Ogni volta che un giocatore assegna a uno dei suoi Pokémon-V una carta Energia dalla propria mano, metti due segnalini danno su quel Pokémon.",
			'pt-br': "Sempre que algum jogador ligar 1 carta de Energia da própria mão a 1 dos próprios Pokémon V, coloque 2 contadores de dano naquele Pokémon.",
			'de-de': "Lege jedes Mal, wenn ein Spieler 1 Energiekarte aus seiner Hand an 1 seiner Pokémon-V anlegt, 2 Schadensmarken auf jenes Pokémon."
		}
	}],

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Linear Attack",
			'fr-fr': "Attaque Linéaire",
			'es-es': "Ataque Lineal",
			'it-it': "Attacco Lineare",
			'pt-br': "Ataque Linear",
			'de-de': "Linearer Angriff"
		},

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "While its durable shell protects it from attacks, Charjabug strikes at enemies with jolts of electricity discharged from the tips of its jaws.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691768,
				tcgplayer: 477055
			}
		},
	],
}

export default card
