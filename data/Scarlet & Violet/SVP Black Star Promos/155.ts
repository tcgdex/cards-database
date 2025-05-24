import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Wooper",
		fr: "Axoloto",
		es: "Wooper",
		it: "Wooper",
		pt: "Wooper",
		de: "Felino"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Scoop Water",
			fr: "Écope Eau",
			es: "Palada de Agua",
			it: "Idrorecupero",
			pt: "Recolher Água",
			de: "Wasser schöpfen"
		},

		effect: {
			en: "Shuffle up to 3 Basic {W} Energy cards from your discard pile into your deck.",
			fr: "Mélangez jusqu'à 3 cartes Énergie {W} de base de votre pile de défausse avec votre deck.",
			es: "Pon hasta 3 cartas de Energía {W} Básica de tu pila de descartes en tu baraja y barájalas todas.",
			it: "Rimischia fino a tre carte Energia base {W} dalla tua pila degli scarti nel tuo mazzo.",
			pt: "Embaralhe até 3 cartas de Energia {W} Básica da sua pilha de descarte no seu baralho.",
			de: "Mische bis zu 3 Basis-{W}-Energiekarten aus deinem Ablagestapel in dein Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Saboteri"
}

export default card