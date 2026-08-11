import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	illustrator: "kirisAki",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "Running Charge",
			'fr-fr': "Assaut Élancé",
			'es-es': "Carga Impulso",
			'it-it': "Carica Scattante",
			'pt-br': "Carga em Disparada",
			'de-de': "Sturmangriff"
		},

		damage: "30×",

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 30 pontos de dano para cada cara.",
			'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "The question of why only Eevee has such unstable genes has still not been solved.",
	},
}

export default card
