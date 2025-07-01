import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Mudsdale",
		fr: "Bourrinos",
		de: "Pampross",
		it: "Mudsdale",
		es: "Mudsdale",
		pt: "Mudsdale",
		'es-mx': "Mudsdale"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Mud Coat",
			fr: "Toison Boueuse",
			de: "Schlammschicht",
			it: "Manto Fangoso",
			es: "Pelaje Lodo",
			pt: "Camada de Lama",
			'es-mx': "Capa de Lodo"
		},

		effect: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-mx': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			de: "Schwerer Einschlag",
			it: "Impatto Pesante",
			es: "Impacto Pesado",
			pt: "Impacto Pesado",
			'es-mx': "Impacto Pesado"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "I",

	variants: {
		normal: true,
		reverse: true,
	},

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
