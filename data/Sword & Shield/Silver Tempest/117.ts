import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [374],
	set: Set,

	name: {
		en: "Beldum",
		fr: "Terhal",
		es: "Beldum",
		it: "Beldum",
		pt: "Beldum",
		de: "Tanhel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Magnetic Lift",
			fr: "Ascension Magnétique",
			es: "Impulso Magnético",
			it: "Sollevamento Magnetico",
			pt: "Elevação Magnética",
			de: "Magnetischer Auftrieb"
		},

		effect: {
			en: "Search your deck for a card. Shuffle your deck, then put that card on top of it.",
			fr: "Cherchez dans votre deck une carte. Mélangez votre deck, puis placez cette carte-là sur le dessus de votre deck.",
			es: "Busca en tu baraja 1 carta. Baraja las cartas de tu baraja y, luego, pon esa carta en la parte superior de tu baraja.",
			it: "Cerca nel tuo mazzo una carta. Rimischia le carte del tuo mazzo, poi metti quella carta in cima al mazzo.",
			pt: "Procure por 1 carta no seu baralho. Embaralhe o seu baralho e, em seguida, coloque aquela carta como a carta de cima do seu baralho.",
			de: "Durchsuche dein Deck nach 1 Karte. Mische dein Deck und lege jene Karte anschließend darauf."
		}
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card