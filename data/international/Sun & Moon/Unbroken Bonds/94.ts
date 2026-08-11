import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Rhydon",
		'fr-fr': "Rhinoféros",
		'es-es': "Rhydon",
		'it-it': "Rhydon",
		'pt-br': "Rhydon",
		'de-de': "Rizeros"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		112,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dirty Work",
				'fr-fr': "Sale Boulot",
				'es-es': "Trabajo Sucio",
				'it-it': "Lavoro Sporco",
				'pt-br': "Trabalho Sujo",
				'de-de': "Drecksarbeit"
			},
			effect: {
				'en-us': "Discard the top card of your opponent’s deck. If you played Giovanni’s Exile from your hand during this turn, discard the top 5 cards instead.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire. Si vous avez joué Exil de Giovanni de votre main pendant ce tour, défaussez les 5 cartes du dessus de son deck à la place.",
				'es-es': "Descarta la primera carta de la baraja de tu rival. Si has jugado 1 carta de Exilio de Giovanni de tu mano durante este turno, descarta las 5 primeras cartas.",
				'it-it': "Scarta la prima carta del mazzo del tuo avversario. Se hai giocato Esilio di Giovanni dalla tua mano durante questo turno, invece, scarta le prime cinque carte.",
				'pt-br': "Descarte a primeira carta do baralho do seu oponente. Se você jogou Exílio do Giovanni da sua mão durante esta vez de jogar, descarte as 5 primeiras cartas ao invés da 1ª.",
				'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel. Wenn du Giovannis Exil während dieses Zuges aus deiner Hand gespielt hast, lege stattdessen die obersten 5 Karten auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Horn Attack",
				'fr-fr': "Koud’Korne",
				'es-es': "Cornada",
				'it-it': "Incornata",
				'pt-br': "Ataque de Chifre",
				'de-de': "Hornattacke"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees Fahrenheit.",
	},

	thirdParty: {
		cardmarket: 372385,
		tcgplayer: 189193
	}
}

export default card
