import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Cleffa",
		fr: "Mélo",
		es: "Cleffa",
		it: "Cleffa",
		pt: "Cleffa"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Grasping Draw",
			fr: "Pioche Happante",
			es: "Robo Avaricioso",
			it: "Pesca Smaniosa",
			pt: "Compra Gananciosa"
		},

		effect: {
			en: "Draw cards until you have 7 cards in your hand.",
			fr: "Piochez des cartes jusqu'à en avoir 7 en main.",
			es: "Roba cartas hasta que tengas 7 cartas en tu mano.",
			it: "Pesca fino ad avere sette carte in mano.",
			pt: "Compre cartas até ter 7 cartas na sua mão."
		}
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card