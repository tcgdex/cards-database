import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Jolteon VMAX",
		fr: "Voltali VMAX",
		es: "Jolteon VMAX",
		it: "Jolteon VMAX",
		pt: "Jolteon VMAX",
		de: "Blitza VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 300,
	types: ["Lightning"],
	stage: "VMAX",
	illustrator: "5ban Graphics",

	attacks: [{
		name: {
			en: "Max Thunder Rumble",
			fr: "Roulement Tonnerromax",
			es: "Maxirretumbar de Truenos",
			it: "Dynarombo del Tuono",
			pt: "Max Thunder Rumble",
			de: "Dyna-Grollender-Donner"
		},

		effect: {
			en: "This attack also does 100 damage to 1 of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 100 dégâts à l'un des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 100 puntos de daño a 1 de los Pokémon en Banca de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 100 danni a uno dei Pokémon nella panchina del tuo avversario che ha dei segnalini danno. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "This attack also does 100 damage to 1 of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners, auf dem mindestens 1 Schadensmarke liegt, 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 100,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,

	evolveFrom: {
		en: "Jolteon V",
		fr: "Voltali-V",
		es: "Jolteon V",
		it: "Jolteon-V",
		pt: "Jolteon V",
		de: "Blitza-V"
	},

	dexId: [135],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574075
	}
}

export default card
