import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [387],
	set: Set,

	name: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss",
		'es-es': "Turtwig",
		'it-it': "Turtwig",
		'pt-br': "Turtwig",
		'de-de': "Chelast"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Solid Shell",
			'fr-fr': "Coquille Dure",
			'es-es': "Caparazón Sólido",
			'it-it': "Guscio Solido",
			'pt-br': "Carapaça Sólida",
			'de-de': "Solider Panzer"
		},

		effect: {
			'en-us': "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Diesem Pokémon werden durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Leafage",
			'fr-fr': "Feuillage",
			'es-es': "Follaje",
			'it-it': "Fogliame",
			'pt-br': "Folhagem",
			'de-de': "Blattwerk"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "Photosynthesis occurs across its body under the sun. The shell on its back is actually hardened soil.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760640,
				tcgplayer: 542760
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760640,
				tcgplayer: 542760
			}
		},
	],

	illustrator: "OKACHEKE",

}

export default card