import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Steven's Skarmory",
		fr: "Airmure de Pierre",
		de: "Troys Panzaeron",
		it: "Skarmory di Rocco",
		es: "Skarmory de Máximo",
		pt: "Skarmory do Steven",
		'es-mx': "Skarmory de Steven"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Razor Wing",
			fr: "Aile Tranchante",
			de: "Rasierflügel",
			it: "Ala Tagliente",
			es: "Ala Cortante",
			pt: "Asa Cortante",
			'es-mx': "Ala Cortante"
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Sonic Double",
			fr: "Double Sonique",
			de: "Doppelschall",
			it: "Doppiosonico",
			es: "Doble Sónico",
			pt: "Dupla Sônica",
			'es-mx': "Doble Sónico"
		},

		effect: {
			en: "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt 2 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			es: "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque causa 50 pontos de dano a 2 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		}
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card