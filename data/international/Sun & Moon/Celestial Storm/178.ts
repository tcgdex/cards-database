import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Acro Bike",
		'fr-fr': "Vélo Cross",
		'es-es': "Bici Acrobática",
		'it-it': "Bici da cross",
		'pt-br': "Bicicleta Acro",
		'de-de': "Kunstrad"
	},

	illustrator: "Toyste Beach",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Regardez les 2 cartes du dessus de votre deck et ajoutez l’une d’entre elles à votre main. Défaussez l’autre carte.",
		'en-us': "Look at the top 2 cards of your deck and put 1 of them into your hand. Discard the other card.",
		'es-es': "Mira las 2 primeras cartas de tu baraja y pon 1 de ellas en tu mano. Descarta la otra carta.",
		'it-it': "Guarda le prime due carte del tuo mazzo e aggiungi una di esse alle carte che hai in mano. Scarta l’altra carta.",
		'pt-br': "Olhe as 2 primeiras cartas do seu baralho e coloque 1 delas na sua mão. Descarte a outra carta.",
		'de-de': "Schau dir die obersten 2 Karten deines Decks an und nimm 1 von ihnen auf deine Hand. Lege die andere Karte auf deinen Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 362171,
		tcgplayer: 171021
	}
}

export default card
