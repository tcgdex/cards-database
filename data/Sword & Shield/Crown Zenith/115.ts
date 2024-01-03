import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Shaymin",
		fr: "Shaymin",
		es: "Shaymin",
		it: "Shaymin",
		pt: "Shaymin",
		de: "Shaymin"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gather Flowers",
			fr: "Brassée de Fleurs",
			es: "Recoger Flores",
			it: "Coglifiori",
			pt: "Reunir Flores",
			de: "Blumen sammeln"
		},

		effect: {
			en: "Shuffle up to 2 Energy cards from your discard pile into your deck.",
			fr: "Mélangez avec votre deck jusqu'à 2 cartes Énergie de votre pile de défausse.",
			es: "Pon hasta 2 cartas de Energía de tu pila de descartes en tu baraja y barájalas todas.",
			it: "Rimischia fino a due carte Energia dalla tua pila degli scarti nel tuo mazzo.",
			pt: "Embaralhe até 2 cartas de Energia da sua pilha de descarte no seu baralho.",
			de: "Mische bis zu 2 Energiekarten aus deinem Ablagestapel in dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			es: "Patada Trasera",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			de: "Rückwärtskick"
		},

		damage: 30
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