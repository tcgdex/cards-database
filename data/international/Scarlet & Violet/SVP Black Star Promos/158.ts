import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [417],
	set: Set,

	name: {
		'en-us': "Pachirisu",
		'fr-fr': "Pachirisu",
		'es-es': "Pachirisu",
		'it-it': "Pachirisu",
		'pt-br': "Pachirisu",
		'de-de': "Pachirisu"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Crackling Charge",
			'fr-fr': "Charge Crépitante",
			'es-es': "Carga Chispeante",
			'it-it': "Carica Crepitante",
			'pt-br': "Carga Crépida",
			'de-de': "Knisternde Aufladung"
		},

		effect: {
			'en-us': "Flip 3 coins. Attach a number of Basic {L} Energy cards up to the number of heads from your discard pile to your Benched Pokémon in any way you like.",
			'fr-fr': "Lancez 3 pièces. Attachez à vos Pokémon de Banc un nombre de cartes Énergie {L} de base de votre pile de défausse inférieur ou égal au nombre de côtés face obtenus, comme il vous plaît.",
			'es-es': "Lanza 3 monedas. Coge de tu pila de descartes una cantidad de cartas de Energía {L} Básica igual o inferior al número de caras que te hayan salido y únelas a tus Pokémon en Banca de la manera que desees.",
			'it-it': "Lancia tre volte una moneta. Assegna ai tuoi Pokémon in panchina un numero di carte Energia base {L} dalla tua pila degli scarti uguale o inferiore al numero di volte in cui è uscito testa nel modo che preferisci.",
			'pt-br': "Jogue 3 moedas. Ligue um número de cartas de Energia {L} Básica até o número de caras da sua pilha de descarte aos seus Pokémon no Banco como desejar.",
			'de-de': "Wirf 3 Münzen. Lege bis zu so viele Basis-{L}-Energiekarten, wie du Kopf geworfen hast, aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Tiny Bolt",
			'fr-fr': "Foudre Minuscule",
			'es-es': "Relampaguito",
			'it-it': "Minifulmine",
			'pt-br': "Corisquinho",
			'de-de': "Mini-Blitz"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Yuya Oka",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 796932,
				tcgplayer: 594410
			},
		}
	],
}

export default card
