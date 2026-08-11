import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [194],
	set: Set,

	name: {
		'en-us': "Wooper",
		'fr-fr': "Axoloto",
		'es-es': "Wooper",
		'it-it': "Wooper",
		'pt-br': "Wooper",
		'de-de': "Felino"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Scoop Water",
			'fr-fr': "Écope Eau",
			'es-es': "Palada de Agua",
			'it-it': "Idrorecupero",
			'pt-br': "Recolher Água",
			'de-de': "Wasser schöpfen"
		},

		effect: {
			'en-us': "Shuffle up to 3 Basic {W} Energy cards from your discard pile into your deck.",
			'fr-fr': "Mélangez jusqu'à 3 cartes Énergie {W} de base de votre pile de défausse avec votre deck.",
			'es-es': "Pon hasta 3 cartas de Energía {W} Básica de tu pila de descartes en tu baraja y barájalas todas.",
			'it-it': "Rimischia fino a tre carte Energia base {W} dalla tua pila degli scarti nel tuo mazzo.",
			'pt-br': "Embaralhe até 3 cartas de Energia {W} Básica da sua pilha de descarte no seu baralho.",
			'de-de': "Mische bis zu 3 Basis-{W}-Energiekarten aus deinem Ablagestapel in dein Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
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
