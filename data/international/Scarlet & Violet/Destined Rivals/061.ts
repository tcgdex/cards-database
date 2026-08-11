import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		'en-us': "Wash Rotom",
		'fr-fr': "Motisma Lavage",
		'de-de': "Wasch-Rotom",
		'it-it': "Rotom Lavaggio",
		'es-es': "Rotom Lavado",
		'pt-br': "Rotom Lavagem",
		'es-mx': "Rotom Lavado"
	},


	illustrator: "miki kudo",

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Manual Wash",
			'fr-fr': "Lavage à la Main",
			'de-de': "Handwäsche",
			'it-it': "Lavaggio a Mano",
			'es-es': "Lavado a Mano",
			'pt-br': "Lavagem Manual",
			'es-mx': "Lavado a Mano"
		},

		effect: {
			'en-us': "Heal 10 damage from each of your Pokémon.",
			'fr-fr': "Soignez 10 dégâts de chacun de vos Pokémon.",
			'de-de': "Heile 10 Schadenspunkte bei jedem deiner Pokémon.",
			'it-it': "Cura ciascuno dei tuoi Pokémon da 10 danni.",
			'es-es': "Cura 10 puntos de daño a cada uno de tus Pokémon.",
			'pt-br': "Cure 10 pontos de dano de cada um dos seus Pokémon.",
			'es-mx': "Cura 10 puntos de daño a cada uno de tus Pokémon."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gadget Show",
			'fr-fr': "Démonstration de Gadgets",
			'de-de': "Gadget-Show",
			'it-it': "Mostra di Gadget",
			'es-es': "Espectáculo de Utensilios",
			'pt-br': "Show de Bugigangas",
			'es-mx': "Show de Artefactos"
		},

		effect: {
			'en-us': "This attack does 30 damage for each Pokémon Tool attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Outil Pokémon attaché à tous vos Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte Pokémon-Ausrüstung 30 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 30 danni per ogni carta Oggetto Pokémon assegnata ai tuoi Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Herramienta Pokémon unida a cada uno de tus Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Ferramenta Pokémon ligada a todos os seus Pokémon.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada Herramienta Pokémon unida a cada uno de tus Pokémon."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825935,
				tcgplayer: 632874
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825935,
				tcgplayer: 632874
			}
		},
	],
}

export default card
