import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [630],

	name: {
		'en-us': "Mandibuzz",
		'fr-fr': "Vaututrice",
		'es-es': "Mandibuzz",
		'it-it': "Mandibuzz",
		'pt-br': "Mandibuzz",
		'de-de': "Grypheldis"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Vullaby",
		'fr-fr': "Vostourno",
		'es-es': "Vullaby",
		'it-it': "Vullaby",
		'pt-br': "Vullaby",
		'de-de': "Skallyk"
	},

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Bone Rush",
				'fr-fr': "Charge Os",
				'es-es': "Ataque Óseo",
				'it-it': "Ossoraffica",
				'pt-br': "Fúria de Ossos",
				'de-de': "Knochenhatz"
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

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Blindside",
				'fr-fr': "Angle Mort",
				'es-es': "Lado Ciego",
				'it-it': "Latocieco",
				'pt-br': "Ponto Cego",
				'de-de': "Aus heiterem Himmel"
			},
			effect: {
				'en-us': "This attack does 100 damage to 1 of your opponent's Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 100 dégâts à l'un des Pokémon de votre adversaire ayant au moins un marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 100 puntos de daño a 1 de los Pokémon de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 100 danni a uno dei Pokémon del tuo avversario che ha dei segnalini danno. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 100 pontos de dano a 1 dos Pokémon do seu oponente que tiver algum contador de dano nele (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners, auf dem mindestens 1 Schadensmarke liegt, 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 120,
	types: ["Darkness"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Although it's a bit of a ruffian, this Pokémon will take lost Vullaby under its wing and care for them till they're ready to leave the nest."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458008,
				tcgplayer: 213214
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458008,
				tcgplayer: 213214
			}
		},
	],
}

export default card
