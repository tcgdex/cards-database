import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [492],
	set: Set,

	name: {
		en: "Shaymin",
		fr: "Shaymin",
		es: "Shaymin",
		it: "Shaymin",
		pt: "Shaymin",
		de: "Shaymin"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Pinpoint Dive",
			fr: "Plongée Ciblée",
			es: "Picado Preciso",
			it: "Picchiata di Precisione",
			pt: "Mergulho Localizador",
			de: "Präzisionslandung"
		},

		effect: {
			en: "This attack does 60 damage to 1 of your opponent's Benched Pokémon ex or Benched Pokémon V. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 60 dégâts à l'un des Pokémon-ex de Banc ou Pokémon-V de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 60 puntos de daño a uno de los Pokémon ex en Banca o Pokémon V en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 60 danni a uno dei Pokémon-ex o Pokémon-V nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 60 pontos de dano a 1 dos Pokémon ex no Banco do seu oponente ou Pokémon V no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt 1 Pokémon-ex auf der Bank deines Gegners oder 1 Pokémon-V auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			es: "Patada Trasera",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			de: "Rückwärtskick"
		},

		damage: 50
	}],

	retreat: 0,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Atsushi Furusawa",

	thirdParty: {
		cardmarket: 760643
	}
}

export default card