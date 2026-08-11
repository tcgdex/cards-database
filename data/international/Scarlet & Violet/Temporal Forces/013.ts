import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [492],
	set: Set,

	name: {
		'en-us': "Shaymin",
		'fr-fr': "Shaymin",
		'es-es': "Shaymin",
		'it-it': "Shaymin",
		'pt-br': "Shaymin",
		'de-de': "Shaymin"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Pinpoint Dive",
			'fr-fr': "Plongée Ciblée",
			'es-es': "Picado Preciso",
			'it-it': "Picchiata di Precisione",
			'pt-br': "Mergulho Localizador",
			'de-de': "Präzisionslandung"
		},

		effect: {
			'en-us': "This attack does 60 damage to 1 of your opponent's Benched Pokémon ex or Benched Pokémon V. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 60 dégâts à l'un des Pokémon-ex de Banc ou Pokémon-V de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 60 puntos de daño a uno de los Pokémon ex en Banca o Pokémon V en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 60 danni a uno dei Pokémon-ex o Pokémon-V nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 60 pontos de dano a 1 dos Pokémon ex no Banco do seu oponente ou Pokémon V no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 1 Pokémon-ex auf der Bank deines Gegners oder 1 Pokémon-V auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "H",

	description: {
		'en-us': "It can dissolve toxins in the air to instantly transform ruined land into a lush field of flowers.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760643,
				tcgplayer: 542761
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760643,
				tcgplayer: 542761
			}
		},
	],

	illustrator: "Atsushi Furusawa",

}

export default card