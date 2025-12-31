import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Honchkrow",
		fr: "Corboss",
		es: "Honchkrow",
		'es-mx': "Honchkrow",
		de: "Kramshef",
		it: "Honchkrow",
		pt: "Honchkrow"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage1",
	dexId: [430],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Wind of Darkness",
			fr: "Vent Obscur",
			es: "Viento de Oscuridad",
			'es-mx': "Viento de Oscuridad",
			de: "Wind der Finsternis",
			it: "Vento dell'Oscurità",
			pt: "Vento da Escuridão"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Sniping Feathers",
			fr: "Plumes de Précision",
			es: "Plumaje Certero",
			'es-mx': "Plumas Certeras",
			de: "Präzisionsfedern",
			it: "Piume di Precisione",
			pt: "Penas de Longo Alcance"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon, and this attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta 2 Energías de este Pokémon, y este ataque hace 120 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Descarta 2 Energías de este Pokémon, y este ataque hace 120 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt 1 Pokémon deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Scarta due Energie da questo Pokémon e questo attacco infligge 120 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte 2 Energias deste Pokémon, e este ataque causa 120 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857633
	}
}

export default card