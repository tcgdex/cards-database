import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Smeargle",
		'fr-fr': "Queulorior",
		'es-es': "Smeargle",
		'es-mx': "Smeargle",
		'de-de': "Farbeagle",
		'it-it': "Smeargle",
		'pt-br': "Smeargle"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [235],
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Energizing Sketch",
			'fr-fr': "Esquisse Énergisante",
			'es-es': "Boceto Energizante",
			'es-mx': "Boceto Energizante",
			'de-de': "Energiespendende Skizze",
			'it-it': "Schizzo Energizzante",
			'pt-br': "Esboço Energizante"
		},

		effect: {
			'en-us': "Flip 3 coins. Attach an amount of Basic Energy up to the number of heads from your discard pile to your Benched Pokémon in any way you like.",
			'fr-fr': "Lancez 3 pièces. Attachez à vos Pokémon de Banc une quantité d'Énergies de base de votre pile de défausse inférieure ou égale au nombre de côtés face obtenus, comme il vous plaît.",
			'es-es': "Lanza 3 monedas. Coge de tu pila de descartes una cantidad de Energías Básicas igual o inferior al número de caras que hayan salido y únelas a tus Pokémon en Banca de la manera que desees.",
			'es-mx': "Lanza 3 monedas. Une una cantidad de Energías Básicas igual o inferior al número de caras que salieron de tu pila de descartes a tus Pokémon en Banca de la manera que quieras.",
			'de-de': "Wirf 3 Münzen. Lege bis zu so viele Basis-Energien, wie du Kopf geworfen hast, aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an.",
			'it-it': "Lancia tre volte una moneta. Assegna ai Pokémon nella tua panchina un numero di Energie base dalla tua pila degli scarti uguale o inferiore al numero di volte in cui è uscito testa nel modo che preferisci.",
			'pt-br': "Jogue 3 moedas. Ligue uma quantidade de cartas de Energia Básica até o número de caras da sua pilha de descarte aos seus Pokémon no Banco como desejar."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Hook",
			'fr-fr': "Crochet",
			'es-es': "Garfio",
			'es-mx': "Gancho",
			'de-de': "Haken",
			'it-it': "Uncino",
			'pt-br': "Gancho"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Once a Smeargle reaches adulthood, it will have other members of its species leave paw prints on its back.",
	},

	illustrator: "REND",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857655,
				tcgplayer: 662227,
				cardtrader: 356866
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857655,
				tcgplayer: 662227,
				cardtrader: 356866
			}
		},
	],
}

export default card
