import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [961],
	set: Set,

	name: {
		'en-us': "Wugtrio",
		'fr-fr': "Triopikeau",
		'es-es': "Wugtrio",
		'it-it': "Wugtrio",
		'pt-br': "Wugtrio",
		'de-de': "Schligdri"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Wiglett",
		'fr-fr': "Taupikeau"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Undersea Tunnel",
			'fr-fr': "Tunnel Sous-Marin",
			'es-es': "Túnel Submarino",
			'it-it': "Tunnel Sommerso",
			'pt-br': "Túnel Subaquático",
			'de-de': "Tiefseetunnel"
		},

		effect: {
			'en-us': "Flip 3 coins. For each heads, discard the top 3 cards of your opponent's deck.",
			'fr-fr': "Lancez 3 pièces. Pour chaque côté face, défaussez les 3 cartes du dessus du deck de votre adversaire.",
			'es-es': "Lanza 3 monedas. Por cada cara, descarta las 3 primeras cartas de la baraja de tu rival.",
			'it-it': "Lancia tre volte una moneta. Ogni volta che esce testa, scarta le prime tre carte del mazzo del tuo avversario.",
			'pt-br': "Jogue 3 moedas. Para cada cara, descarte as 3 cartas de cima do baralho do seu oponente.",
			'de-de': "Wirf 3 Münzen. Lege pro Kopf die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel."
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "KIYOTAKA OSHIYAMA",

	description: {
		'en-us': "It has a vicious temperament, contrary to what its appearance may suggest. It wraps its long bodies around prey, then drags the prey into its den.",
	},

	thirdParty: {
        cardmarket: 702352,
        tcgplayer: 487906
    }
}

export default card