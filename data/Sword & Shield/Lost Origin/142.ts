import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [474],
	set: Set,

	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
		es: "Porygon-Z",
		it: "Porygon-Z",
		pt: "Porygon-Z",
		de: "Porygon-Z"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		en: "Porygon2",
		fr: "Porygon2",
		es: "Porygon2",
		it: "Porygon2",
		pt: "Porygon2",
		de: "Porygon2"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Downgrading Beam",
			fr: "Rayon Rétrograde",
			es: "Transmisión de Involución",
			it: "Raggio Declassante",
			pt: "Raio de Degradação",
			de: "Rückstufender Strahl"
		},

		effect: {
			en: "Devolve 1 of your opponent's evolved Pokémon by removing any number of Evolution cards from it. Your opponent shuffles those cards into their deck.",
			fr: "Faites dés-évoluer l'un des Pokémon évolués de votre adversaire en ôtant le nombre voulu de cartes Évolution. Votre adversaire mélange ces cartes avec son deck.",
			es: "Involuciona 1 de los Pokémon evolucionados de tu rival quitándole cualquier cantidad de cartas de Evolución. Tu rival pone esas cartas en su baraja y las baraja todas.",
			it: "Annulla l'evoluzione di uno dei Pokémon evoluti del tuo avversario rimuovendone un numero qualsiasi di carte Evoluzione. Il tuo avversario rimischia quelle carte nel suo mazzo.",
			pt: "Reverta a evolução de 1 dos Pokémon evoluídos do seu oponente removendo qualquer número de cartas de Evolução sobre ele. Seu oponente embaralha aquelas cartas no próprio baralho.",
			de: "Rückentwickle 1 entwickeltes Pokémon deines Gegners, indem du beliebig viele Entwicklungskarten von ihm entfernst. Dein Gegner mischt jene Karten in sein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Power Beam",
			fr: "Puissant Rayon",
			es: "Rayo de Luz Poderoso",
			it: "Raggiopotenza",
			pt: "Raio de Poder",
			de: "Power-Strahl"
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674152,
		tcgplayer: 284066
	}
}

export default card