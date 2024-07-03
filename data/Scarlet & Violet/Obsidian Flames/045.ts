import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [131],
	set: Set,

	name: {
		fr: "Lokhlass",
		en: "Lapras",
		es: "Lapras",
		it: "Lapras",
		pt: "Lapras",
		de: "Lapras"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Grêle",
			en: "Hail",
			es: "Granizo",
			it: "Grandine",
			pt: "Granizo",
			de: "Hagelsturm"
		},

		effect: {
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 10 pontos de dano a cada um dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			fr: "Vent Glaçant",
			en: "Freezing Wind",
			es: "Viento Gélido",
			it: "Ventogelido",
			pt: "Vento Gelado",
			de: "Polarwind"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card