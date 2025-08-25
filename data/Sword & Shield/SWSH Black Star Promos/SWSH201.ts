import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [196],
	set: Set,

	name: {
		fr: "Mentali V",
		de: "Psiana V",
		es: "Espeon V",
		pt: "Espeon V",
		it: "Espeon V",
		en: "Espeon V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Tir Zen",
			de: "Zen-Schuss",
			es: "Disparo Zen",
			pt: "Disparo Zen",
			it: "Colpo Zen",
			en: "Zen Shot"
		},

		effect: {
			fr: "Cette attaque inflige 60 dégâts à l'un des Pokémon-V de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt 1 Pokémon-V deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque hace 60 puntos de daño a 1 de los Pokémon V de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque causa 60 pontos de dano a 1 dos Pokémon V do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge 60 danni a uno dei Pokémon-V del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			en: "This attack does 60 damage to 1 of your opponent's Pokémon V. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			fr: "Super Psy",
			de: "Super-Psischlag",
			es: "Superrayo Psi",
			pt: "Super-raio Psíquico",
			it: "Superpsico",
			en: "Super Psy Bolt"
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 609460
	}
}

export default card