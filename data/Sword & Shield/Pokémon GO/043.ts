import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
		es: "Tyranitar",
		it: "Tyranitar",
		pt: "Tyranitar",
		de: "Despotar"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],

	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
		es: "Pupitar",
		it: "Pupitar",
		pt: "Pupitar",
		de: "Pupitar"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Raging Crash",
			fr: "Collision Acharnée",
			es: "Choque Furioso",
			it: "Furia Distruttiva",
			pt: "Colisão Feroz",
			de: "Tobender Hagel"
		},

		effect: {
			en: "This attack does 10 damage for each damage counter on all of your Benched Pokémon.",
			fr: "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts placé sur tous vos Pokémon de Banc.",
			es: "Este ataque hace 10 puntos de daño por cada contador de daño en todos tus Pokémon en Banca.",
			it: "Questo attacco infligge 10 danni per ogni segnalino danno presente sui tuoi Pokémon in panchina.",
			pt: "Este ataque causa 10 pontos de dano para cada contador de dano em todos os seus Pokémon no Banco.",
			de: "Diese Attacke fügt für jede Schadensmarke auf allen Pokémon auf deiner Bank 10 Schadenspunkte zu."
		},

		damage: "10×"
	}, {
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"],

		name: {
			en: "Earthquake",
			fr: "Séisme",
			es: "Terremoto",
			it: "Terremoto",
			pt: "Terremoto",
			de: "Erdbeben"
		},

		effect: {
			en: "This attack also does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 20 pontos de dano a cada um dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 180
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	}
}

export default card