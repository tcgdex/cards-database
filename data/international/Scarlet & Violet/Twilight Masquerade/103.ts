import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [532],
	set: Set,

	name: {
		'en-us': "Timburr",
		'fr-fr': "Charpenti",
		'es-es': "Timburr",
		'it-it': "Timburr",
		'pt-br': "Timburr",
		'de-de': "Praktibalk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Best Punch",
			'fr-fr': "Coup de Poing Ultime",
			'es-es': "Mejor Puñetazo",
			'it-it': "Migliorpugno",
			'pt-br': "Soco Absoluto",
			'de-de': "Bester Schlag"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It fights by swinging a piece of lumber around. It is close to evolving when it can handle heavy lumber without difficulty.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769277,
				tcgplayer: 550147
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769277,
				tcgplayer: 550147
			}
		},
	],

	illustrator: "Kouki Saitou",

}

export default card