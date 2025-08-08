import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [522],
	set: Set,

	name: {
		fr: "Zébibron",
		de: "Elezeba",
		es: "Blitzle",
		pt: "Blitzle",
		it: "Blitzle",
		en: "Blitzle"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Lance-Éclair",
			de: "Donnerspeer",
			es: "Lanza del Trueno",
			pt: "Lança do Trovão",
			it: "Tuonolancia",
			en: "Thunder Spear"
		},

		effect: {
			fr: "Cette attaque inflige 10 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque hace 10 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque causa 10 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge 10 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			en: "This attack does 10 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		en: "Its mane shines when it discharges electricity. They use the frequency and rhythm of these flashes to communicate."
	}
}

export default card