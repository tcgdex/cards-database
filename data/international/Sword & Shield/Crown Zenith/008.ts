import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [193],
	set: Set,

	name: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'es-es': "Yanma",
		'it-it': "Yanma",
		'pt-br': "Yanma",
		'de-de': "Yanma"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Swoop Across",
			'fr-fr': "Déferlement Aérien",
			'es-es': "Vuelo Transversal",
			'it-it': "Volo Radente",
			'pt-br': "Investida Cruzada",
			'de-de': "Überflieger"
		},

		effect: {
			'en-us': "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 10 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Cutting Wind",
			'fr-fr': "Vent Glacial",
			'es-es': "Viento Helado",
			'it-it': "Vento Tagliente",
			'pt-br': "Vento Dilacerante",
			'de-de': "Schneidender Wind"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "If it flaps its wings really fast, it can generate shock waves that will shatter windows in the area.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691725,
				tcgplayer: 478054
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691725,
				tcgplayer: 478054
			}
		},
	],
}

export default card
