import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		en: "Mow Rotom",
		fr: "Motisma Tonte",
		de: "Schneid-Rotom",
		it: "Rotom Taglio",
		es: "Rotom Corte",
		pt: "Rotom Corte",
		'es-mx': "Rotom Podadora"
	},

	illustrator: "Rianti Hidayat",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Trimming Mower",
			fr: "Tondeuse Tondante",
			de: "Stutzende Schneide",
			it: "Falciatrice",
			es: "Cortacésped",
			pt: "Cortador de Grama",
			'es-mx': "Cortacésped"
		},

		effect: {
			en: "Discard a Stadium in play.",
			fr: "Défaussez un Stade en jeu.",
			de: "Lege 1 Stadionkarte im Spiel auf den Ablagestapel.",
			it: "Scarta una carta Stadio in gioco.",
			es: "Descarta 1 Estadio en juego.",
			pt: "Descarte um Estádio em jogo.",
			'es-mx': "Descarta 1 Estadio en juego."
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

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 825883
	}
}

export default card
