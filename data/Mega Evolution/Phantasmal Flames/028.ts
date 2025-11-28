import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Prinplup",
		fr: "Prinplouf",
		es: "Prinplup",
		'es-mx': "Prinplup",
		de: "Pliprin",
		it: "Prinplup",
		pt: "Prinplup"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [394],
	hp: 100,
	types: ["Water"],
	stage: "Stage1",
	dexId: [394],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			'es-mx': "Picotazo",
			de: "Pikser",
			it: "Beccata",
			pt: "Bicada"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Targeted Dive",
			fr: "Plongée Visée",
			es: "Picado Dirigido",
			'es-mx': "Buceo Preciso",
			de: "Gezielter Taucher",
			it: "Tuffo Mirato",
			pt: "Mergulho na Mira"
		},

		effect: {
			en: "This attack does 70 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 70 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 70 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 70 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 70 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 70 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 70 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857603
	}
}

export default card