import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [28],
	set: Set,

	name: {
		en: "Sandslash",
		fr: "Sablaireau",
		es: "Sandslash",
		it: "Sandslash",
		pt: "Sandslash",
		de: "Sandamer"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Sandshrew",
		fr: "Sabelette",
		es: "Sandshrew",
		it: "Sandshrew",
		pt: "Sandshrew",
		de: "Sandan"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Kyoko Umemoto",

	description: {
		en: "Thanks to its thick claws, it's good at climbing trees. There are plenty of Sandslash that park themselves in trees and go right to sleep."
	},

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Dig Uppercut",
			fr: "Poing Excavateur",
			de: "Schaufelhaken",
			es: "Gancho Excavador",
			pt: "Cavar para Cima",
			it: "Scavalesto"
		},

		damage: 60,

		effect: {
			en: "Put a card from your discard pile into your hand.",
			fr: "Ajoutez à votre main une carte de votre pile de défausse.",
			de: "Nimm 1 Karte aus deinem Ablagestapel auf deine Hand.",
			es: "Pon 1 carta de tu pila de descartes en tu mano.",
			pt: "Coloque 1 carta da sua pilha de descarte na sua mão.",
			it: "Prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card