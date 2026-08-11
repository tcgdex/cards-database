import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [861],
	set: Set,

	name: {
		'en-us': "Grimmsnarl",
		'fr-fr': "Angoliath",
		'es-es': "Grimmsnarl",
		'it-it': "Grimmsnarl",
		'pt-br': "Grimmsnarl",
		'de-de': "Olangaar"
	},

	illustrator: "DOM",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Morgrem",
		'fr-fr': "Fourbelin",
		'es-es': "Morgrem",
		'it-it': "Morgrem",
		'pt-br': "Morgrem",
		'de-de': "Pelzebub"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Longhair Shot",
			'fr-fr': "Tir Chevelu",
			'es-es': "Disparo Melenudo",
			'it-it': "Colpo Capellone",
			'pt-br': "Disparo Cabeludo",
			'de-de': "Langhaarschuss"
		},

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon for each Darkness Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie Darkness attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival por cada Energía Darkness unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario per ogni Energia Darkness assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia Darkness ligada a este Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Darkness-Energie 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Darkness Fang",
			'fr-fr': "Croc Obscur",
			'es-es': "Colmillo de Oscuridad",
			'it-it': "Oscurizanna",
			'pt-br': "Presa Sombria",
			'de-de': "Fänge der Dunkelheit"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "With the hair wrapped around its body helping to enhance its muscles, this Pokémon can overwhelm even Machamp.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608640,
				tcgplayer: 263812
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608640,
				tcgplayer: 263812
			}
		},
	],
}

export default card
