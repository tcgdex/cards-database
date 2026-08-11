import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		'en-us': "Mow Rotom",
		'fr-fr': "Motisma Tonte",
		'de-de': "Schneid-Rotom",
		'it-it': "Rotom Taglio",
		'es-es': "Rotom Corte",
		'pt-br': "Rotom Corte",
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
			'en-us': "Trimming Mower",
			'fr-fr': "Tondeuse Tondante",
			'de-de': "Stutzende Schneide",
			'it-it': "Falciatrice",
			'es-es': "Cortacésped",
			'pt-br': "Cortador de Grama",
			'es-mx': "Cortacésped"
		},

		effect: {
			'en-us': "Discard a Stadium in play.",
			'fr-fr': "Défaussez un Stade en jeu.",
			'de-de': "Lege 1 Stadionkarte im Spiel auf den Ablagestapel.",
			'it-it': "Scarta una carta Stadio in gioco.",
			'es-es': "Descarta 1 Estadio en juego.",
			'pt-br': "Descarte um Estádio em jogo.",
			'es-mx': "Descarta 1 Estadio en juego."
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
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825883,
				tcgplayer: 632835
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825883,
				tcgplayer: 632835
			}
		},
	],
}

export default card
