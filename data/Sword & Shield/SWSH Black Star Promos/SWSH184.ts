import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Voltali VMAX",
		de: "Blitza VMAX",
		es: "Jolteon VMAX",
		pt: "Jolteon VMAX",
		it: "Jolteon VMAX",
		en: "Jolteon VMAX"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 300,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Voltali-V",
		de: "Blitza-V",
		es: "Jolteon V",
		pt: "Jolteon V",
		it: "Jolteon-V",
		en: "Jolteon V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			fr: "Roulement Tonnerromax",
			de: "Dyna-Grollender-Donner",
			es: "Maxirretumbar de Truenos",
			pt: "Estrondo do Trovão Max",
			it: "Dynarombo del Tuono",
			en: "Max Thunder Rumble"
		},

		effect: {
			fr: "Cette attaque inflige aussi 100 dégâts à l'un des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners, auf dem mindestens 1 Schadensmarke liegt, 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque también hace 100 puntos de daño a 1 de los Pokémon en Banca de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 100 pontos de dano a 1 dos Pokémon no Banco do seu oponente que tiver algum contador de dano nele (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge anche 100 danni a uno dei Pokémon nella panchina del tuo avversario che ha dei segnalini danno. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			en: "This attack also does 100 damage to 1 of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 100
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card