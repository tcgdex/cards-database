import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [832],
	set: Set,

	name: {
		'en-us': "Dubwool",
		'fr-fr': "Moumouflon",
		'es-es': "Dubwool",
		'it-it': "Dubwool",
		'pt-br': "Dubwool",
		'de-de': "Zwollock"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Wooloo",
		'fr-fr': "Moumouton",
		'es-es': "Wooloo",
		'it-it': "Wooloo",
		'pt-br': "Wooloo",
		'de-de': "Wolly"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Overhead Throw",
			'fr-fr': "Soulève Corne",
			'es-es': "Lanzamiento Elevado",
			'it-it': "Lancindietro",
			'pt-br': "Arremessar por Cima",
			'de-de': "Überwerfer"
		},

		effect: {
			'en-us': "This attack also does 10 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à l'un de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 10 puntos de daño a 1 de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 10 danni a uno dei tuoi Pokémon in panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 10 pontos de dano a 1 dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rolling Dash",
			'fr-fr': "Ruée Roulée",
			'es-es': "Carrera Rodante",
			'it-it': "Carica Ruzzolante",
			'pt-br': "Investida Rolante",
			'de-de': "Rollender Spurt"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
			'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Weave a carpet from its springy wool, and you end up with something closer to a trampoline. You'll start to bounce the moment you set foot on it.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691841,
				tcgplayer: 478161
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691841,
				tcgplayer: 478161
			}
		},
	],
}

export default card
