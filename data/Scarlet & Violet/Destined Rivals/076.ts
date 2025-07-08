import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Manectric",
		fr: "Élecsprint",
		de: "Voltenso",
		it: "Manectric",
		es: "Manectric",
		pt: "Manectric",
		'es-mx': "Manectric"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur",
			de: "Stromtritt",
			it: "Dinamocalcio",
			es: "Electropatada",
			pt: "Chute Zap",
			'es-mx': "Electropatada"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Flash Impact",
			fr: "Impact-Flash",
			de: "Blitzeinschlag",
			it: "Impattoflash",
			es: "Impacto Resplandor",
			pt: "Impacto Lampejante",
			'es-mx': "Impacto Destello"
		},

		effect: {
			en: "This attack also does 40 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 40 dégâts à l'un de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf deiner Bank 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge anche 40 danni a uno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			es: "Este ataque también hace 40 puntos de daño a uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 40 pontos de dano a 1 dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque también hace 40 puntos de daño a 1 de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "I",

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
