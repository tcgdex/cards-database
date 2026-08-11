import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Bombirdier",
		fr: "Lestombaile",
		es: "Bombirdier",
		'es-mx': "Bombirdier",
		de: "Adebom",
		it: "Bombirdier",
		pt: "Bombirdier"
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
			en: "Challenging Delivery",
			fr: "Livraison Difficile",
			es: "Reparto Desafiante",
			'es-mx': "Entrega Complicada",
			de: "Schwierige Lieferung",
			it: "Consegna Complessa",
			pt: "Duro de Entregar"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip 2 coins. If both of them are heads, search your deck for a Pokémon and put it onto your Bench. Then, shuffle your deck.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, cherchez dans votre deck un Pokémon, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			es: "Lanza 2 monedas. Si salen 2 caras, busca en tu baraja 1 Pokémon y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Lanza 2 monedas. Si sale cara en ambas, busca en tu mazo 1 Pokémon y ponlo en tu Banca. Después, baraja tu mazo.",
			de: "Wirf 2 Münzen. Zeigen beide Münzen Kopf, durchsuche dein Deck nach 1 Pokémon und lege es auf deine Bank. Mische anschließend dein Deck.",
			it: "Lancia due volte una moneta. Se esce entrambe le volte testa, cerca nel tuo mazzo un Pokémon e mettilo nella tua panchina. Poi rimischia il tuo mazzo.",
			pt: "Jogue 2 moedas. Se as duas saírem cara, procure por um Pokémon no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho."
		}
	}, {
		name: {
			en: "Speed Wing",
			fr: "Ailes Vives",
			es: "Ala Veloz",
			'es-mx': "Ala Veloz",
			de: "Turboschwinge",
			it: "Alaveloce",
			pt: "Asa da Velocidade"
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
