import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [131],
	set: Set,

	name: {
		'fr-fr': "Lokhlass",
		'en-us': "Lapras",
		'es-es': "Lapras",
		'it-it': "Lapras",
		'pt-br': "Lapras",
		'de-de': "Lapras"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Grêle",
			'en-us': "Hail",
			'es-es': "Granizo",
			'it-it': "Grandine",
			'pt-br': "Granizo",
			'de-de': "Hagelsturm"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 10 pontos de dano a cada um dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'fr-fr': "Vent Glaçant",
			'en-us': "Freezing Wind",
			'es-es': "Viento Gélido",
			'it-it': "Ventogelido",
			'pt-br': "Vento Gelado",
			'de-de': "Polarwind"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Crossing icy seas is no issue for this cold-resistant Pokémon. Its smooth skin is a little cool to the touch.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725125,
				tcgplayer: 509761,
				cardtrader: 255605
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725125,
				tcgplayer: 509761,
				cardtrader: 255605
			}
		},
	],

	illustrator: "matazo",

	
}

export default card
