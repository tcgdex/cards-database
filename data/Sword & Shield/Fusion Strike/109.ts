import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [877],
	set: Set,

	name: {
		en: "Morpeko",
		fr: "Morpeko",
		es: "Morpeko",
		it: "Morpeko",
		pt: "Morpeko",
		de: "Morpeko"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Sanosuke Sakuma",

	description: {
		en: "It carries electrically roasted seeds with it as if they're precious treasures. No matter how much it eats, it always gets hungry again in short order."
	},

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Targeted Spark",
			fr: "Étincelle Ciblée",
			de: "Gezielter Funke",
			es: "Chispa Direccionada",
			pt: "Faísca na Mira",
			it: "Scintilla Mirata"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card