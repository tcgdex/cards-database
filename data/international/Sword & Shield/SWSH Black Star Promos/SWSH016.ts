import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Inteleon V",
		'fr-fr': "Lézargus V",
		'es-es': "Inteleon V",
		'it-it': "Inteleon V",
		'pt-br': "Inteleon V",
		'de-de': "Intelleon V"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Snipe Shot",
			'fr-fr': "Tir de Précision",
			'es-es': "Disparo Certero",
			'it-it': "Tiromirato",
			'pt-br': "Tiro Certeiro",
			'de-de': "Präzisionsschuss"
		},

		effect: {
			'en-us': "This attack does 40 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 40 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 40 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 40 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Water"]
	}, {
		name: {
			'en-us': "Aqua Report",
			'fr-fr': "Bilan Aquatique",
			'es-es': "Informe Acuático",
			'it-it': "Idrosoffiata",
			'pt-br': "Relatório Aquático",
			'de-de': "Wasserbericht"
		},

		effect: {
			'en-us': "Your opponent reveals their hand.",
			'fr-fr': "Votre adversaire dévoile sa main.",
			'es-es': "Tu rival enseña las cartas de su mano.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano.",
			'pt-br': "Seu oponente revela a própria mão.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten."
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	stage: "Basic",
	dexId: [818],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 450618
	}
}

export default card
