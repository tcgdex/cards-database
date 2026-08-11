import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [577],
	set: Set,

	name: {
		'en-us': "Solosis",
		'fr-fr': "Nucléos",
		'es-es': "Solosis",
		'it-it': "Solosis",
		'pt-br': "Solosis",
		'de-de': "Monozyto"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Surprise Attack",
			'fr-fr': "Attaque Surprise",
			'es-es': "Ataque Sorpresa",
			'it-it': "Attacco a Sorpresa",
			'pt-br': "Ataque Surpresa",
			'de-de': "Überraschungsangriff"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It communicates with others telepathically. Its body is encapsulated in liquid, but if it takes a heavy blow, the liquid will leak out.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760700,
				tcgplayer: 542814
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760700,
				tcgplayer: 542814
			}
		},
	],

	illustrator: "Cona Nitanda",

}

export default card