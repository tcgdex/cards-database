import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [128],
	set: Set,

	name: {
		fr: "Tauros de Paldea",
		en: "Paldean Tauros",
		es: "Tauros de Paldea",
		it: "Tauros di Paldea",
		pt: "Tauros de Paldea",
		de: "Paldea-Tauros"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Cornes Furieuses",
			en: "Raging Horns",
			es: "Cuernos Embravecidos",
			it: "Corna Furiose",
			pt: "Chifres Indomáveis",
			de: "Rasende Hörner"
		},

		effect: {
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			fr: "Plongée Aquatique",
			en: "Aqua Dive",
			es: "Embestida Aqua",
			it: "Tuffo Acquatico",
			pt: "Mergulho Aquático",
			de: "Flutentaucher"
		},

		effect: {
			fr: "Cette attaque inflige 60 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack does 60 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque hace 60 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 60 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 60 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Oswaldo KATO"
}

export default card