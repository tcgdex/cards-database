import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
		es: "Pachirisu",
		it: "Pachirisu",
		pt: "Pachirisu",
		de: "Pachirisu"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Crackling Charge",
			fr: "Charge Crépitante",
			es: "Carga Chispeante",
			it: "Carica Crepitante",
			pt: "Carga Crépida",
			de: "Knisternde Aufladung"
		},

		effect: {
			en: "Flip 3 coins. Attach a number of Basic Lightning Energy cards up to the number of heads from your discard pile to your Benched Pokémon in any way you like.",
			fr: "Lancez 3&nbsp;pièces. Attachez à vos Pokémon de Banc un nombre de cartes Énergie&nbsp;Lightning de base de votre pile de défausse inférieur ou égal au nombre de côtés face obtenus, comme il vous plaît.",
			es: "Lanza 3 monedas. Coge de tu pila de descartes una cantidad de cartas de Energía Lightning Básica igual o inferior al número de caras que te hayan salido y únelas a tus Pokémon en Banca de la manera que desees.",
			it: "Lancia tre volte una moneta. Assegna ai tuoi Pokémon in panchina un numero di carte Energia base Lightning dalla tua pila degli scarti uguale o inferiore al numero di volte in cui è uscito testa nel modo che preferisci.",
			pt: "Jogue 3 moedas. Ligue um número de cartas de Energia Lightning Básica até o número de caras da sua pilha de descarte aos seus Pokémon no Banco como desejar.",
			de: "Wirf 3 Münzen. Lege bis zu so viele Basis-Lightning-Energiekarten, wie du Kopf geworfen hast, aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Tiny Bolt",
			fr: "Foudre Minuscule",
			es: "Relampaguito",
			it: "Minifulmine",
			pt: "Corisquinho",
			de: "Mini-Blitz"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card