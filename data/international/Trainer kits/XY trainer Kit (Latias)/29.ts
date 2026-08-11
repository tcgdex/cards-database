import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Acro Bike",
		'fr-fr': "Vélo Cross",
		'es-es': "Bici Acrobática",
		'it-it': "Bici da cross",
		'pt-br': "Bicicleta Acro",
		'de-de': "Kunstrad"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Look at the top 2 cards of your deck and put 1 of them into your hand. Discard the other card.",
		'fr-fr': "Regardez les 2 cartes du dessus de votre deck et ajoutez l’une d’entre elles à votre main. Défaussez l’autre carte.",
		'es-es': "Mira las 2 primeras cartas de tu baraja y pon 1 de ellas en tu mano. Descarta la otra carta.",
		'it-it': "Guarda le prime due carte del tuo mazzo e aggiungi una di esse alle carte che hai in mano. Scarta l’altra carta.",
		'pt-br': "Olhe os 2 cards de cima do seu baralho e coloque 1 deles de volta na sua mão. Descarte o outro card.",
		'de-de': "Schau dir die 2 obersten Karten deines Decks an und nimm 1 auf deine Hand. Lege die andere Karte auf deinen Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		tcgplayer: 98345
	}
}

export default card