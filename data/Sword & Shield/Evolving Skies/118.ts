import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Zygarde",
		fr: "Zygarde",
		es: "Zygarde",
		it: "Zygarde",
		pt: "Zygarde",
		de: "Zygarde"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "otumami",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Bite",
			de: "Biss"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Judgment Surge",
			fr: "Jugement Déferlant",
			es: "Oleada Sentenciosa",
			it: "Ondata del Giudizio",
			pt: "Judgment Surge",
			de: "Verurteilung"
		},

		effect: {
			en: "This attack does 40 damage to 1 of your opponent's Pokémon for each Prize card your opponent has taken. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 40 dégâts à l'un des Pokémon de votre adversaire pour chaque carte Récompense que votre adversaire a récupérée. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival por cada carta de Premio que haya cogido tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 40 danni a uno dei Pokémon del tuo avversario per ogni carta Premio che ha preso. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "This attack does 40 damage to 1 of your opponent's Pokémon for each Prize card your opponent has taken. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners für jede von deinem Gegner genommene Preiskarte 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Grass", "Fighting", "Colorless"]
	}],

	retreat: 2,
	dexId: [718],

	description: {
		en: "Some say it can change to an even more powerful form when battling those who threaten the ecosystem."
	},

	regulationMark: "E"
}

export default card
