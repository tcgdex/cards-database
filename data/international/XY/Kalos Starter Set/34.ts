import { Card } from 'models/database/card'
import Set from '../Kalos Starter Set'

const card: Card = {
	name: {
		'en-us': "Crushing Hammer",
		'fr-fr': "Maillet Écrasant",
		'es-es': "Martillo Demoledor",
		'it-it': "Martello Dirompente",
		'pt-br': "Martelo Esmagador",
		'de-de': "Schmetterhammer"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée à l'un des Pokémon de votre adversaire.",
		'en-us': "Flip a coin. If heads, discard an Energy attached to 1 of your opponent's Pokémon.",
		'es-es': "Lanza una moneda. Si sale cara, descarta una Energía unida a 1 de los Pokémon de tu rival.",
		'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia assegnata a uno dei Pokémon del tuo avversario.",
		'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia ligada a 1 dos Pokémon do seu oponente.",
		'de-de': "Wirf 1 Münze. Lege bei \"Kopf\" 1 an das gegnerische Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281300,
		tcgplayer: 84507
	}
}

export default card
