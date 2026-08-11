import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [776],
	set: Set,

	name: {
		'en-us': "Turtonator",
		'fr-fr': "Boumata",
		'es-es': "Turtonator",
		'it-it': "Turtonator",
		'pt-br': "Turtonator",
		'de-de': "Tortunator"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Spit-Out Shot",
			'fr-fr': "Tir Projeté",
			'es-es': "Disparo Escupitajo",
			'it-it': "Lanciosputo",
			'pt-br': "Cuspido e Disparado",
			'de-de': "Ausspuckschuss"
		},

		effect: {
			'en-us': "This attack does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 40 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 40 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 40 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 40 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Steam Artillery",
			'fr-fr': "Artillerie Vapeur",
			'es-es': "Artillería de Vapor",
			'it-it': "Artiglieria Vapore",
			'pt-br': "Artilharia de Vapor",
			'de-de': "Dampfgeschütz"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "Explosive substances coat the shell on its back. Enemies that dare attack it will be blown away by an immense detonation.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760665,
				tcgplayer: 542779
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760665,
				tcgplayer: 542779
			}
		},
	],

	illustrator: "Shigenori Negishi",

}

export default card