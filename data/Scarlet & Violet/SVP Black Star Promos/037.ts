import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [173],
	set: Set,

	name: {
		en: "Cleffa",
		fr: "Mélo",
		es: "Cleffa",
		it: "Cleffa",
		pt: "Cleffa",
		de: "Pii"
	},

	rarity: "None",
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
			pt: "Compra Gananciosa",
			de: "Beherzt zugreifen"
		},

		effect: {
			en: "Draw cards until you have 7 cards in your hand.",
			fr: "Piochez des cartes jusqu'à en avoir 7 en main.",
			es: "Roba cartas hasta que tengas 7 cartas en tu mano.",
			it: "Pesca fino ad avere sette carte in mano.",
			pt: "Compre cartas até ter 7 cartas na sua mão.",
			de: "Ziehe so lange Karten, bis du 7 Karten auf deiner Hand hast."
		}
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",
	illustrator: "Mina Nakai",
	description: {
		en: "Because of its unusual, starlike silhouette, people believe that it came here on a meteor.",
	},
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"]
		}
	],
}

export default card
