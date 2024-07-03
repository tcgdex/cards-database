import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [776],
	set: Set,

	name: {
		en: "Turtonator",
		fr: "Boumata",
		es: "Turtonator",
		it: "Turtonator",
		pt: "Turtonator",
		de: "Tortunator"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Spit-Out Shot",
			fr: "Tir Projeté",
			es: "Disparo Escupitajo",
			it: "Lanciosputo",
			pt: "Cuspido e Disparado",
			de: "Ausspuckschuss"
		},

		effect: {
			en: "This attack does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 40 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 40 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 40 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 40 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Steam Artillery",
			fr: "Artillerie Vapeur",
			es: "Artillería de Vapor",
			it: "Artiglieria Vapore",
			pt: "Artilharia de Vapor",
			de: "Dampfgeschütz"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card