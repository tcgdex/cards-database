import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [194],
	set: Set,
	cameoDexIds: [116],

	name: {
		en: "Wooper",
		es: "Wooper",
		it: "Wooper",
		pt: "Wooper",
		de: "Felino"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Scoop Water",
			es: "Palada de Agua",
			it: "Idrorecupero",
			pt: "Recolher Água",
			de: "Wasser schöpfen"
		},

		effect: {
			en: "Shuffle up to 3 Basic {W} Energy cards from your discard pile into your deck.",
			es: "Pon hasta 3 cartas de Energía {W} Básica de tu pila de descartes en tu baraja y barájalas todas.",
			it: "Rimischia fino a tre carte Energia base {W} dalla tua pila degli scarti nel tuo mazzo.",
			pt: "Embaralhe até 3 cartas de Energia {W} Básica da sua pilha de descarte no seu baralho.",
			de: "Mische bis zu 3 Basis-{W}-Energiekarten aus deinem Ablagestapel in dein Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Headbutt",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Saboteri",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 796925,
				tcgplayer: 594389
			},
		}
	],
}

export default card
