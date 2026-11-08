import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Crushing Hammer",
		'fr-fr': "Maillet Écrasant",
		'es-es': "Martillo Demoledor",
		'it-it': "Martello Dirompente",
		'pt-br': "Martelo Esmagador",
		'de-de': "Schmetterhammer"
	},

	illustrator: "sadaji",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Flip a coin. If heads, discard an Energy from 1 of your opponent's Pokémon.",
		'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie de l'un des Pokémon de votre adversaire.",
		'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía de 1 de los Pokémon de tu rival.",
		'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia da uno dei Pokémon del tuo avversario.",
		'pt-br': "Jogue 1 moeda. Se sair cara, descarte 1 Energia de 1 dos Pokémon do seu oponente.",
		'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Item",


	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691844,
				tcgplayer: 478166
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691844,
				tcgplayer: 478166
			}
		},
	],
}

export default card
