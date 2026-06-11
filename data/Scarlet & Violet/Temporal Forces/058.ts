import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [835],
	set: Set,

	name: {
		en: "Yamper",
		fr: "Voltoutou",
		es: "Yamper",
		it: "Yamper",
		pt: "Yamper",
		de: "Voldi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Whimsy Tackle",
			fr: "Charge Bizarre",
			es: "Placaje Caprichoso",
			it: "Capriccioazione",
			pt: "Investida Fantástica",
			de: "Launischer Tackle"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
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
		en: "This Pokémon is very popular as a herding dog in the Galar region. As it runs, it generates electricity from the base of its tail.",
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