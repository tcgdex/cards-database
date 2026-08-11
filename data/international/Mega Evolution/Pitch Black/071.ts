import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bombirdier",
		'fr-fr': "Lestombaile",
		'es-es': "Bombirdier",
		'es-mx': "Bombirdier",
		'de-de': "Adebom",
		'it-it': "Bombirdier",
		'pt-br': "Bombirdier"
	},

	illustrator: "Wintr Wandr",
	rarity: "Common",
	category: "Pokemon",
	dexId: [962],
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Challenging Delivery",
			'fr-fr': "Livraison Difficile",
			'es-es': "Reparto Desafiante",
			'es-mx': "Entrega Complicada",
			'de-de': "Schwierige Lieferung",
			'it-it': "Consegna Complessa",
			'pt-br': "Duro de Entregar"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Flip 2 coins. If both of them are heads, search your deck for a Pokémon and put it onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, cherchez dans votre deck un Pokémon, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Lanza 2 monedas. Si salen 2 caras, busca en tu baraja 1 Pokémon y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Lanza 2 monedas. Si sale cara en ambas, busca en tu mazo 1 Pokémon y ponlo en tu Banca. Después, baraja tu mazo.",
			'de-de': "Wirf 2 Münzen. Zeigen beide Münzen Kopf, durchsuche dein Deck nach 1 Pokémon und lege es auf deine Bank. Mische anschließend dein Deck.",
			'it-it': "Lancia due volte una moneta. Se esce entrambe le volte testa, cerca nel tuo mazzo un Pokémon e mettilo nella tua panchina. Poi rimischia il tuo mazzo.",
			'pt-br': "Jogue 2 moedas. Se as duas saírem cara, procure por um Pokémon no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho."
		}
	}, {
		name: {
			'en-us': "Speed Wing",
			'fr-fr': "Ailes Vives",
			'es-es': "Ala Veloz",
			'es-mx': "Ala Veloz",
			'de-de': "Turboschwinge",
			'it-it': "Alaveloce",
			'pt-br': "Asa da Velocidade"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		damage: 100
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895855,
				tcgplayer: 704828
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895855,
				tcgplayer: 704828
			}
		},
	],
}

export default card
