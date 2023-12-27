import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Radiant Charjabug",
		fr: "Chrysapile Radieux",
		es: "Charjabug Radiante",
		it: "Charjabug Lucente",
		pt: "Charjabug Radiante",
		de: "Strahlendes Akkup"
	},

	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Shocking Block",
			fr: "Bloc Choquant",
			es: "Bloqueo Descarga",
			it: "Bloccoshock",
			pt: "Bloqueio Eletrizante",
			de: "Schockblock"
		},

		effect: {
			en: "Whenever any player attaches an Energy card from their hand to 1 of their Pokémon V, put 2 damage counters on that Pokémon.",
			fr: "Chaque fois qu'un joueur attache une carte Énergie de sa main à l'un de ses Pokémon-V, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
			es: "Cada vez que algún jugador una 1 carta de Energía de su mano a 1 de sus Pokémon V, pon 2 contadores de daño en ese Pokémon.",
			it: "Ogni volta che un giocatore assegna a uno dei suoi Pokémon-V una carta Energia dalla propria mano, metti due segnalini danno su quel Pokémon.",
			pt: "Sempre que algum jogador ligar 1 carta de Energia da própria mão a 1 dos próprios Pokémon V, coloque 2 contadores de dano naquele Pokémon.",
			de: "Lege jedes Mal, wenn ein Spieler 1 Energiekarte aus seiner Hand an 1 seiner Pokémon-V anlegt, 2 Schadensmarken auf jenes Pokémon."
		}
	}],

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Linear Attack",
			fr: "Attaque Linéaire",
			es: "Ataque Lineal",
			it: "Attacco Lineare",
			pt: "Ataque Linear",
			de: "Linearer Angriff"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
