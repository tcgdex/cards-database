import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Crushing Hammer",
		'fr-fr': "Maillet Écrasant",
		'es-es': "Martillo Demoledor",
		'it-it': "Martello Dirompente",
		'pt-br': "Martelo Esmagador",
		'de-de': "Schmetterhammer"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez une pièce. Si c’est face, défaussez une Énergie de l’un des Pokémon de votre adversaire.",
		'en-us': "Flip a coin. If heads, discard an Energy from 1 of your opponent’s Pokémon.",
		'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía de 1 de los Pokémon de tu rival.",
		'it-it': "Lancia una moneta. Se esce testa, scarta un’Energia assegnata a uno dei Pokémon del tuo avversario.",
		'pt-br': "Jogue 1 moeda. Se sair cara, descarte 1 Energia de 1 dos Pokémon do seu oponente.",
		'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 316090,
		tcgplayer: 157782
	}
}

export default card
