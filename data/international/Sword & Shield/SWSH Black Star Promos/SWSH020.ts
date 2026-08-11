import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	attacks: [{
		name: {
			'en-us': "Iron Tail",
			'fr-fr': "Queue de Fer",
			'es-es': "Cola Férrea",
			'it-it': "Codacciaio",
			'pt-br': "Cauda de Ferro",
			'de-de': "Eisenschweif"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 30 pontos de dano para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Electro Ball",
			'fr-fr': "Boule Élek",
			'es-es': "Bola Voltio",
			'it-it': "Energisfera",
			'pt-br': "Bola Elétrica",
			'de-de': "Elektroball"
		},

		damage: 60,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy."
	},

	stage: "Basic",
	dexId: [25],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 461594
	}
}

export default card
