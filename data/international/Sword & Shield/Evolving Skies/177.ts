import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Jolteon V",
		'fr-fr': "Voltali V",
		'es-es': "Jolteon V",
		'it-it': "Jolteon V",
		'pt-br': "Jolteon V",
		'de-de': "Blitza V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "5ban Graphics",

	attacks: [{
		name: {
			'en-us': "Thunder Spear",
			'fr-fr': "Lance-Éclair",
			'es-es': "Lanza del Trueno",
			'it-it': "Tuonolancia",
			'pt-br': "Thunder Spear",
			'de-de': "Donnerspeer"
		},

		effect: {
			'en-us': "This attack does 20 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "This attack does 20 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Pin Missile",
			'fr-fr': "Dard-Nuée",
			'es-es': "Pin Misil",
			'it-it': "Missilspillo",
			'pt-br': "Pin Missile",
			'de-de': "Nadelrakete"
		},

		effect: {
			'en-us': "Flip 4 coins. This attack does 60 damage for each heads.",
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
			'es-es': "Lanza 4 monedas. Este ataque hace 60 puntos de daño por cada cara.",
			'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
			'pt-br': "Flip 4 coins. This attack does 60 damage for each heads.",
			'de-de': "Wirf 4 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
		},

		damage: "60×",
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	dexId: [135],
	regulationMark: "E",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574235,
				tcgplayer: 246763
			}
		},
	],
}

export default card
