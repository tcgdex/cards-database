import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Varoom",
		fr: "Vrombi",
		es: "Varoom",
		it: "Varoom",
		pt: "Varoom"
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
			pt: "Pisar Fundo"
		},

		effect: {
			en: "Put up to 2 Basic Energy cards from your discard pile into your hand.",
			fr: "Ajoutez jusqu'à 2 cartes Énergie de base de votre pile de défausse à votre main.",
			es: "Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
			it: "Prendi fino a due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			pt: "Coloque até 2 cartas de Energia Básica da sua pilha de descarte na sua mão."
		}
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card