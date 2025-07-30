import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Blaziken",
		fr: "Braségali",
		de: "Lohgock",
		it: "Blaziken",
		es: "Blaziken",
		pt: "Blaziken",
		'es-mx': "Blaziken"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
			de: "Hitzestoß",
			it: "Caldobomba",
			es: "Explosión de Calor",
			pt: "Raio de Calor",
			'es-mx': "Explosión Ígnea"
		},

		damage: 70
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Inferno Kick Flurry",
			fr: "Rafale de Coups de Pied Infernale",
			de: "Inferno-Trittschauer",
			it: "Calcioturbine Infernale",
			es: "Ráfaga de Patadas Infernales",
			pt: "Enxurrada de Chutes Infernais",
			'es-mx': "Ráfaga de Piropatadas"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon. This attack also does 120 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige aussi 120 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Scarta due Energie da questo Pokémon. Questo attacco infligge anche 120 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			es: "Descarta 2 Energías de este Pokémon. Este ataque también hace 120 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Descarte 2 Energias deste Pokémon. Este ataque também causa 120 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Descarta 2 Energías de este Pokémon. Este ataque también hace 120 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card