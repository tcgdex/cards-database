import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Smeargle",
		fr: "Queulorior",
		es: "Smeargle",
		'es-mx': "Smeargle",
		de: "Farbeagle",
		it: "Smeargle",
		pt: "Smeargle"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Energizing Sketch",
			fr: "Esquisse Énergisante",
			es: "Boceto Energizante",
			'es-mx': "Boceto Energizante",
			de: "Energiespendende Skizze",
			it: "Schizzo Energizzante",
			pt: "Esboço Energizante"
		},

		effect: {
			en: "Flip 3 coins. Attach an amount of Basic Energy up to the number of heads from your discard pile to your Benched Pokémon in any way you like.",
			fr: "Lancez 3 pièces. Attachez à vos Pokémon de Banc une quantité d'Énergies de base de votre pile de défausse inférieure ou égale au nombre de côtés face obtenus, comme il vous plaît.",
			es: "Lanza 3 monedas. Coge de tu pila de descartes una cantidad de Energías Básicas igual o inferior al número de caras que hayan salido y únelas a tus Pokémon en Banca de la manera que desees.",
			'es-mx': "Lanza 3 monedas. Une una cantidad de Energías Básicas igual o inferior al número de caras que salieron de tu pila de descartes a tus Pokémon en Banca de la manera que quieras.",
			de: "Wirf 3 Münzen. Lege bis zu so viele Basis-Energien, wie du Kopf geworfen hast, aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an.",
			it: "Lancia tre volte una moneta. Assegna ai Pokémon nella tua panchina un numero di Energie base dalla tua pila degli scarti uguale o inferiore al numero di volte in cui è uscito testa nel modo che preferisci.",
			pt: "Jogue 3 moedas. Ligue uma quantidade de cartas de Energia Básica até o número de caras da sua pilha de descarte aos seus Pokémon no Banco como desejar."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hook",
			fr: "Crochet",
			es: "Garfio",
			'es-mx': "Gancho",
			de: "Haken",
			it: "Uncino",
			pt: "Gancho"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857655
	}
}

export default card