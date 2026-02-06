import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [630],

	name: {
		en: "Mandibuzz ex",
		fr: "Vaututrice-ex",
		es: "Mandibuzz ex",
		'es-mx': "Mandibuzz ex",
		de: "Grypheldis-ex",
		it: "Mandibuzz-ex",
		pt: "Mandibuzz ex"
	},

	illustrator: "Ultimateinudog",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bone Shot",
			fr: "Tir d'Os",
			es: "Disparo Óseo",
			'es-mx': "Disparo Óseo",
			de: "Knochenschuss",
			it: "Ossocolpo",
			pt: "Disparo Ósseo"
		},

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 50 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Vulture Claw",
			fr: "Griffe Vautour",
			es: "Garra Buitre",
			'es-mx': "Garra del Buitre",
			de: "Geierkralle",
			it: "Aquilartiglio",
			pt: "Garra de Abutre"
		},

		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			'es-mx': "Descarta 1 carta aleatoria de la mano de tu rival.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			it: "Scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Descarte uma carta aleatória da mão do seu oponente."
		},

		damage: 160
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675951,
		cardmarket: 869750
	}
}

export default card