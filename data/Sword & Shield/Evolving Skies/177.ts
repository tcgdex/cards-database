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
		en: "Jolteon V",
		fr: "Voltali V",
		es: "Jolteon V",
		it: "Jolteon V",
		pt: "Jolteon V",
		de: "Blitza V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "5ban Graphics",
	suffix: "V",

	attacks: [{
		name: {
			en: "Thunder Spear",
			fr: "Lance-Éclair",
			es: "Lanza del Trueno",
			it: "Tuonolancia",
			pt: "Thunder Spear",
			de: "Donnerspeer"
		},

		effect: {
			en: "This attack does 20 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "This attack does 20 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Pin Missile",
			fr: "Dard-Nuée",
			es: "Pin Misil",
			it: "Missilspillo",
			pt: "Pin Missile",
			de: "Nadelrakete"
		},

		effect: {
			en: "Flip 4 coins. This attack does 60 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
			es: "Lanza 4 monedas. Este ataque hace 60 puntos de daño por cada cara.",
			it: "Lancia quattro volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
			pt: "Flip 4 coins. This attack does 60 damage for each heads.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
		},

		damage: "60×",
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	dexId: [135]
}

export default card