import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [56],
	set: Set,

	name: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'de-de': "Menki",
		'it-it': "Mankey",
		'es-es': "Mankey",
		'pt-br': "Mankey",
		'es-mx': "Mankey"
	},


	illustrator: "Ayako Ozaki",

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Wild Kick",
			'fr-fr': "Coup Déchaîné",
			'de-de': "Stürmischer Kick",
			'it-it': "Calcio Selvaggio",
			'es-es': "Patada Salvaje",
			'pt-br': "Chute sem Pontaria",
			'es-mx': "Patada Salvaje"
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
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825964,
				tcgplayer: 632899
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825964,
				tcgplayer: 632899
			}
		},
	],
}

export default card
