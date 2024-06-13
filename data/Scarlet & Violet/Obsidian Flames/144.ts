import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [436],
	set: Set,

	name: {
		fr: "Archéomire",
		en: "Bronzor",
		es: "Bronzor",
		it: "Bronzor",
		pt: "Bronzor",
		de: "Bronzel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			fr: "Pioche Miroir",
			en: "Mirror Draw",
			es: "Robo Espejo",
			it: "Pesca Riflessa",
			pt: "Compra Espelhada",
			de: "Spiegelzug"
		},

		effect: {
			fr: "Piochez des cartes jusqu'à en avoir autant dans votre main que votre adversaire.",
			en: "Draw cards until you have the same number of cards in your hand as your opponent.",
			es: "Roba cartas hasta que tengas la misma cantidad de cartas en tu mano que tu rival.",
			it: "Pesca fino ad avere in mano lo stesso numero di carte del tuo avversario.",
			pt: "Compre cartas até ter o mesmo número de cartas na sua mão do que seu oponente.",
			de: "Ziehe so lange Karten, bis du genauso viele Karten auf der Hand hast wie dein Gegner."
		}
	}, {
		cost: ["Metal", "Metal"],

		name: {
			fr: "Plongée Rapide",
			en: "Speed Dive",
			es: "Picado Rápido",
			it: "Immersione Rapida",
			pt: "Mergulho Veloz",
			de: "Tempohechtsprung"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card