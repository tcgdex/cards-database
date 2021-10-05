import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Inteleon V",
		fr: "Lézargus V",
		es: "Inteleon V",
		it: "Inteleon V",
		pt: "Inteleon V",
		de: "Intelleon V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Snipe Shot",
			fr: "Tir de Précision",
			es: "Disparo Certero",
			it: "Tiromirato",
			pt: "Snipe Shot",
			de: "Präzisionsschuss"
		},

		effect: {
			en: "This attack does 40 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 40 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 40 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "This attack does 40 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Water"]
	}, {
		name: {
			en: "Aqua Report",
			fr: "Bilan Aquatique",
			es: "Informe Acuático",
			it: "Idrosoffiata",
			pt: "Aqua Report",
			de: "Wasserbericht"
		},

		effect: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire dévoile sa main.",
			es: "Tu rival enseña las cartas de su mano.",
			it: "Il tuo avversario mostra le carte che ha in mano.",
			pt: "Your opponent reveals their hand.",
			de: "Dein Gegner zeigt dir seine Handkarten."
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	stage: "Basic",
	suffix: "V",
	dexId: [818],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card