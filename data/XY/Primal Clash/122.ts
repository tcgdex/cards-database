import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Acro Bike",
		fr: "Vélo Cross",
		es: "Bici Acrobática",
		it: "Bici da cross",
		pt: "Bicicleta Acro",
		de: "Kunstrad"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Regardez les 2 cartes du dessus de votre deck et ajoutez l'une d'entre elles à votre main. Défaussez l'autre carte.",
		en: "Look at the top 2 cards of your deck and put 1 of them into your hand. Discard the other card.",
		es: "Mira las 2 primeras cartas de tu baraja y pon 1 de ellas en tu mano. Descarta la otra carta.",
		it: "Guarda le prime due carte del tuo mazzo e aggiungi una di esse alle carte che hai in mano. Scarta l'altra carta.",
		pt: "Olhe os 2 cards de cima do seu baralho e coloque 1 deles de volta na sua mão. Descarte o outro card.",
		de: "Schau dir die 2 obersten Karten deines Decks an und nimm 1 auf deine Hand. Lege die andere Karte auf deinen Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 273653,
		tcgplayer: 96020
	}
}

export default card
