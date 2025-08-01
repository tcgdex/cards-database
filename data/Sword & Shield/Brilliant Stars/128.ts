import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Drampa V",
		fr: "Draïeul V",
		es: "Drampa V",
		it: "Drampa V",
		pt: "Drampa V",
		de: "Sen-Long V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spike Draw",
			fr: "Pique-Pioche",
			es: "Robo Pico",
			it: "Battipesca",
			pt: "Comprada Espinhosa",
			de: "Stachelzug"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Dragon Pulse",
			fr: "Draco-Choc",
			es: "Pulso Dragón",
			it: "Dragopulsar",
			pt: "Pulso do Dragão",
			de: "Drachenpuls"
		},

		effect: {
			en: "Discard the top 2 cards of your deck.",
			fr: "Défaussez les 2 cartes du dessus de votre deck.",
			es: "Descarta las 2 primeras cartas de tu baraja.",
			it: "Scarta le prime due carte del tuo mazzo.",
			pt: "Descarte as 2 cartas de cima do seu baralho.",
			de: "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608674
	}
}

export default card
