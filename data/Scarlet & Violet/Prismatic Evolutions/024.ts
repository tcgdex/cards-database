import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Suicune",
		fr: "Suicune",
		es: "Suicune",
		pt: "Suicune",
		it: "Suicune",
		de: "Suicune"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Overrun",
			fr: "Dépassement",
			es: "Rebasar",
			pt: "Atropelar",
			it: "Oltrepassare",
			de: "Überrennen"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
			es: "Rayo Aurora",
			pt: "Raio Aurora",
			it: "Raggiaurora",
			de: "Aurorastrahl"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card