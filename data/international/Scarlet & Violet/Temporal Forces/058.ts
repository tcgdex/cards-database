import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [835],
	set: Set,

	name: {
		'en-us': "Yamper",
		'fr-fr': "Voltoutou",
		'es-es': "Yamper",
		'it-it': "Yamper",
		'pt-br': "Yamper",
		'de-de': "Voldi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Whimsy Tackle",
			'fr-fr': "Charge Bizarre",
			'es-es': "Placaje Caprichoso",
			'it-it': "Capriccioazione",
			'pt-br': "Investida Fantástica",
			'de-de': "Launischer Tackle"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon is very popular as a herding dog in the Galar region. As it runs, it generates electricity from the base of its tail.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760688,
				tcgplayer: 542802
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760688,
				tcgplayer: 542802
			}
		},
	],

	illustrator: "kurumitsu",

}

export default card