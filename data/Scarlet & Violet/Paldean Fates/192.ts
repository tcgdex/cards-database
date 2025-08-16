import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [965],
	set: Set,

	name: {
		en: "Varoom",
		fr: "Vrombi",
		es: "Varoom",
		it: "Varoom",
		pt: "Varoom",
		de: "Knattox"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rev",
			fr: "Coup d'Accélération",
			es: "Acelerón",
			it: "Su di Giri",
			pt: "Pisar Fundo",
			de: "Hochdrehen"
		},

		effect: {
			en: "Put up to 2 Basic Energy cards from your discard pile into your hand.",
			fr: "Ajoutez jusqu'à 2 cartes Énergie de base de votre pile de défausse à votre main.",
			es: "Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
			it: "Prendi fino a due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			pt: "Coloque até 2 cartas de Energia Básica da sua pilha de descarte na sua mão.",
			de: "Nimm bis zu 2 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Masakazu Fukuda"
}

export default card