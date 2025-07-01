import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Wash Rotom",
		fr: "Motisma Lavage",
		de: "Wasch-Rotom",
		it: "Rotom Lavaggio",
		es: "Rotom Lavado",
		pt: "Rotom Lavagem",
		'es-mx': "Rotom Lavado"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Manual Wash",
			fr: "Lavage à la Main",
			de: "Handwäsche",
			it: "Lavaggio a Mano",
			es: "Lavado a Mano",
			pt: "Lavagem Manual",
			'es-mx': "Lavado a Mano"
		},

		effect: {
			en: "Heal 10 damage from each of your Pokémon.",
			fr: "Soignez 10 dégâts de chacun de vos Pokémon.",
			de: "Heile 10 Schadenspunkte bei jedem deiner Pokémon.",
			it: "Cura ciascuno dei tuoi Pokémon da 10 danni.",
			es: "Cura 10 puntos de daño a cada uno de tus Pokémon.",
			pt: "Cure 10 pontos de dano de cada um dos seus Pokémon.",
			'es-mx': "Cura 10 puntos de daño a cada uno de tus Pokémon."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gadget Show",
			fr: "Démonstration de Gadgets",
			de: "Gadget-Show",
			it: "Mostra di Gadget",
			es: "Espectáculo de Utensilios",
			pt: "Show de Bugigangas",
			'es-mx': "Show de Artefactos"
		},

		effect: {
			en: "This attack does 30 damage for each Pokémon Tool attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque Outil Pokémon attaché à tous vos Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Pokémon-Ausrüstung 30 Schadenspunkte zu.",
			it: "Questo attacco infligge 30 danni per ogni carta Oggetto Pokémon assegnata ai tuoi Pokémon.",
			es: "Este ataque hace 30 puntos de daño por cada Herramienta Pokémon unida a cada uno de tus Pokémon.",
			pt: "Este ataque causa 30 pontos de dano para cada Ferramenta Pokémon ligada a todos os seus Pokémon.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada Herramienta Pokémon unida a cada uno de tus Pokémon."
		},

		damage: "30×"
	}],

	retreat: 2,
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
