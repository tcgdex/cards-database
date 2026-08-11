import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [29],
	set: Set,

	name: {
		'en-us': "Team Rocket's Nidoran♀",
		'fr-fr': "Nidoran♀ de la Team Rocket",
		'de-de': "Team Rockets Nidoran♀",
		'it-it': "Nidoran♀ del Team Rocket",
		'es-es': "Nidoran♀ del Team Rocket",
		'pt-br': "Nidoran♀ da Equipe Rocket",
		'es-mx': "Nidoran♀ del Equipo Rocket"
	},


	illustrator: "REND",

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Surprise Attack",
			'fr-fr': "Attaque Surprise",
			'de-de': "Überraschungsangriff",
			'it-it': "Attacco a Sorpresa",
			'es-es': "Ataque Sorpresa",
			'pt-br': "Ataque Surpresa",
			'es-mx': "Ataque Sorpresa"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825988,
				tcgplayer: 632922
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825988,
				tcgplayer: 632922
			}
		},
	],
}

export default card
