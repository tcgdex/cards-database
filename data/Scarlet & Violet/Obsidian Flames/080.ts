import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [173],
	set: Set,

	name: {
		fr: "Mélo",
		en: "Cleffa",
		es: "Cleffa",
		it: "Cleffa",
		pt: "Cleffa",
		de: "Pii"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			fr: "Pioche Happante",
			en: "Grasping Draw",
			es: "Robo Avaricioso",
			it: "Pesca Smaniosa",
			pt: "Compra Gananciosa",
			de: "Beherzt zugreifen"
		},

		effect: {
			fr: "Piochez des cartes jusqu'à en avoir 7 en main.",
			en: "Draw cards until you have 7 cards in your hand.",
			es: "Roba cartas hasta que tengas 7 cartas en tu mano.",
			it: "Pesca fino ad avere sette carte in mano.",
			pt: "Compre cartas até ter 7 cartas na sua mão.",
			de: "Ziehe so lange Karten, bis du 7 Karten auf deiner Hand hast."
		}
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "kurumitsu",

	thirdParty: {
		cardmarket: 725160
	}
}

export default card