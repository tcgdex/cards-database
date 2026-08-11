import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [474],
	set: Set,

	name: {
		'en-us': "Porygon-Z",
		'fr-fr': "Porygon-Z",
		'es-es': "Porygon-Z",
		'it-it': "Porygon-Z",
		'pt-br': "Porygon-Z",
		'de-de': "Porygon-Z"
	},

	illustrator: "Shibuzoh.",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
		'es-es': "Porygon2",
		'it-it': "Porygon2",
		'pt-br': "Porygon2",
		'de-de': "Porygon2"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Downgrading Beam",
			'fr-fr': "Rayon Rétrograde",
			'es-es': "Transmisión de Involución",
			'it-it': "Raggio Declassante",
			'pt-br': "Raio de Degradação",
			'de-de': "Rückstufender Strahl"
		},

		effect: {
			'en-us': "Devolve 1 of your opponent's evolved Pokémon by removing any number of Evolution cards from it. Your opponent shuffles those cards into their deck.",
			'fr-fr': "Faites dés-évoluer l'un des Pokémon évolués de votre adversaire en ôtant le nombre voulu de cartes Évolution. Votre adversaire mélange ces cartes avec son deck.",
			'es-es': "Involuciona 1 de los Pokémon evolucionados de tu rival quitándole cualquier cantidad de cartas de Evolución. Tu rival pone esas cartas en su baraja y las baraja todas.",
			'it-it': "Annulla l'evoluzione di uno dei Pokémon evoluti del tuo avversario rimuovendone un numero qualsiasi di carte Evoluzione. Il tuo avversario rimischia quelle carte nel suo mazzo.",
			'pt-br': "Reverta a evolução de 1 dos Pokémon evoluídos do seu oponente removendo qualquer número de cartas de Evolução sobre ele. Seu oponente embaralha aquelas cartas no próprio baralho.",
			'de-de': "Rückentwickle 1 entwickeltes Pokémon deines Gegners, indem du beliebig viele Entwicklungskarten von ihm entfernst. Dein Gegner mischt jene Karten in sein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Power Beam",
			'fr-fr': "Puissant Rayon",
			'es-es': "Rayo de Luz Poderoso",
			'it-it': "Raggiopotenza",
			'pt-br': "Raio de Poder",
			'de-de': "Power-Strahl"
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674152,
				tcgplayer: 284066
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674152,
				tcgplayer: 284066
			}
		},
	],
}

export default card
