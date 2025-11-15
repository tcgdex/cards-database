import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Ambipom",
		fr: "Capidextre",
		es: "Ambipom",
		'es-mx': "Ambipom",
		de: "Ambidiffel",
		it: "Ambipom",
		pt: "Ambipom"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Slap",
			fr: "Gifle",
			es: "Bofetón",
			'es-mx': "Bofetón",
			de: "Hieb",
			it: "Sberla",
			pt: "Tapa"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Dual Tail",
			fr: "Queue Double",
			es: "Doble Cola",
			'es-mx': "Cola Dual",
			de: "Doppelschweif",
			it: "Coda Duplice",
			pt: "Cauda Dupla"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon, and this attack does 60 damage to each of 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige à 2 des Pokémon de votre adversaire 60 dégâts chacun. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta 2 Energías de este Pokémon, y este ataque hace 60 puntos de daño a cada uno de los 2 Pokémon de tu rival que elijas. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Descarta 2 Energías de este Pokémon, y este ataque hace 60 puntos de daño a cada uno de 2 Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt 2 Pokémon deines Gegners jeweils 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Scarta due Energie da questo Pokémon e questo attacco infligge 60 danni ciascuno a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte 2 Energias deste Pokémon, e este ataque causa 60 pontos de dano a cada um de 2 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card