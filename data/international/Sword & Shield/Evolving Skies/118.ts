import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Zygarde",
		'fr-fr': "Zygarde",
		'es-es': "Zygarde",
		'it-it': "Zygarde",
		'pt-br': "Zygarde",
		'de-de': "Zygarde"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "otumami",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Bite",
			'de-de': "Biss"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Judgment Surge",
			'fr-fr': "Jugement Déferlant",
			'es-es': "Oleada Sentenciosa",
			'it-it': "Ondata del Giudizio",
			'pt-br': "Judgment Surge",
			'de-de': "Verurteilung"
		},

		effect: {
			'en-us': "This attack does 40 damage to 1 of your opponent's Pokémon for each Prize card your opponent has taken. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 40 dégâts à l'un des Pokémon de votre adversaire pour chaque carte Récompense que votre adversaire a récupérée. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival por cada carta de Premio que haya cogido tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 40 danni a uno dei Pokémon del tuo avversario per ogni carta Premio che ha preso. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "This attack does 40 damage to 1 of your opponent's Pokémon for each Prize card your opponent has taken. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners für jede von deinem Gegner genommene Preiskarte 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Grass", "Fighting", "Colorless"]
	}],

	retreat: 2,
	dexId: [718],

	description: {
		'en-us': "Some say it can change to an even more powerful form when battling those who threaten the ecosystem."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574166,
				tcgplayer: 246915
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574166,
				tcgplayer: 246915
			}
		},
	],
}

export default card
