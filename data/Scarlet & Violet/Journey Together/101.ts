import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Bombirdier",
		fr: "Lestombaile",
		es: "Bombirdier",
		de: "Adebom",
		it: "Bombirdier",
		pt: "Bombirdier",
		'es-mx': "Bombirdier"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Glide",
			fr: "Glissement",
			es: "Planeo",
			de: "Gleiten",
			it: "Aliante",
			pt: "Planeio",
			'es-mx': "Planeo"
		},

		damage: 20
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Drop Shot",
			fr: "Tir Largage",
			es: "Dejada",
			de: "Abwurfgeschoss",
			it: "Gettacolpo",
			pt: "Derrubala",
			'es-mx': "Descarga Aérea"
		},

		effect: {
			en: "Discard all Energy from this Pokémon, and this attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez toutes les Énergies de ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta todas las Energías de este Pokémon, y este ataque hace 120 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt 1 Pokémon deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Scarta tutte le Energie da questo Pokémon e questo attacco infligge 120 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte todas as Energias deste Pokémon, e este ataque causa 120 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Descarta todas las Energías de este Pokémon, y este ataque hace 120 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		}
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
