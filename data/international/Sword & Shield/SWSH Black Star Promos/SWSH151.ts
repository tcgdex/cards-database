import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [135],
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		'en-us': "Jolteon V",
		'fr-fr': "Voltali V",
		'de-de': "Blitza V",
		'es-es': "Jolteon V",
		'pt-br': "Jolteon V",
		'it-it': "Jolteon V"
	},

	rarity: "Promo",
	hp: 190,
	types: ["Lightning"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Thunder Spear",
			'fr-fr': "Lance-Éclair",
			'de-de': "Donnerspeer",
			'es-es': "Lanza del Trueno",
			'pt-br': "Lança do Trovão",
			'it-it': "Tuonolancia"
		},

		effect: {
			'en-us': "This attack does 20 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Pin Missile",
			'fr-fr': "Dard-Nuée",
			'de-de': "Nadelrakete",
			'es-es': "Pin Misil",
			'pt-br': "Míssil de Espinhos",
			'it-it': "Missilspillo"
		},

		damage: "60×",

		effect: {
			'en-us': "Flip 4 coins. This attack does 60 damage for each heads.",
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
			'de-de': "Wirf 4 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu.",
			'es-es': "Lanza 4 monedas. Este ataque hace 60 puntos de daño por cada cara.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 60 pontos de dano para cada cara.",
			'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa."
		}
	}],

	regulationMark: "E",
	suffix: "V",
	retreat: 0,

	thirdParty: {
		cardmarket: 576504
	}
}

export default card
