import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Rhydon",
		fr: "Rhinoféros",
		es: "Rhydon",
		it: "Rhydon",
		pt: "Rhydon",
		de: "Rizeros"
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
		en: "Rhyhorn",
		fr: "Rhinocorne",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dirty Work",
				fr: "Sale Boulot",
				es: "Trabajo Sucio",
				it: "Lavoro Sporco",
				pt: "Trabalho Sujo",
				de: "Drecksarbeit"
			},
			effect: {
				en: "Discard the top card of your opponent’s deck. If you played Giovanni’s Exile from your hand during this turn, discard the top 5 cards instead.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire. Si vous avez joué Exil de Giovanni de votre main pendant ce tour, défaussez les 5 cartes du dessus de son deck à la place.",
				es: "Descarta la primera carta de la baraja de tu rival. Si has jugado 1 carta de Exilio de Giovanni de tu mano durante este turno, descarta las 5 primeras cartas.",
				it: "Scarta la prima carta del mazzo del tuo avversario. Se hai giocato Esilio di Giovanni dalla tua mano durante questo turno, invece, scarta le prime cinque carte.",
				pt: "Descarte a primeira carta do baralho do seu oponente. Se você jogou Exílio do Giovanni da sua mão durante esta vez de jogar, descarte as 5 primeiras cartas ao invés da 1ª.",
				de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel. Wenn du Giovannis Exil während dieses Zuges aus deiner Hand gespielt hast, lege stattdessen die obersten 5 Karten auf seinen Ablagestapel."
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
				en: "Horn Attack",
				fr: "Koud’Korne",
				es: "Cornada",
				it: "Incornata",
				pt: "Ataque de Chifre",
				de: "Hornattacke"
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

	thirdParty: {
		cardmarket: 372385,
		tcgplayer: 189193
	}
}

export default card
