import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mandibuzz ex",
		'fr-fr': "Vaututrice-ex",
		'es-es': "Mandibuzz ex",
		'es-mx': "Mandibuzz ex",
		'de-de': "Grypheldis-ex",
		'it-it': "Mandibuzz-ex",
		'pt-br': "Mandibuzz ex"
	},
	evolveFrom: {
		'en-us': "Vullaby",
		'de-de': "Skallyk",
		'es-es': "Vullaby",
		'es-mx': "Vullaby",
		'fr-fr': "Vostourno",
		'it-it': "Vullaby",
		'pt-br': "Vullaby",
	},

	suffix: "ex",
	illustrator: "Ultimateinudog",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [630],
	hp: 260,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bone Shot",
			'fr-fr': "Tir d'Os",
			'es-es': "Disparo Óseo",
			'es-mx': "Disparo Óseo",
			'de-de': "Knochenschuss",
			'it-it': "Ossocolpo",
			'pt-br': "Disparo Ósseo"
		},

		effect: {
			'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 50 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Vulture Claw",
			'fr-fr': "Griffe Vautour",
			'es-es': "Garra Buitre",
			'es-mx': "Garra del Buitre",
			'de-de': "Geierkralle",
			'it-it': "Aquilartiglio",
			'pt-br': "Garra de Abutre"
		},

		effect: {
			'en-us': "Discard a random card from your opponent's hand.",
			'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'es-mx': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
			'pt-br': "Descarte uma carta aleatória da mão do seu oponente."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869750,
				tcgplayer: 675951
			}
		}
	],
}

export default card
