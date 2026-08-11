import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Crushing Hammer",
		'fr-fr': "Maillet Écrasant",
		'es-es': "Martillo Demoledor",
		'es-mx': "Martillo Demoledor",
		'de-de': "Schmetterhammer",
		'it-it': "Martello Dirompente",
		'pt-br': "Martelo Esmagador"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Flip a coin. If heads, discard an Energy from 1 of your opponent's Pokémon.",
		'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie de l'un des Pokémon de votre adversaire.",
		'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía de uno de los Pokémon de tu rival.",
		'es-mx': "Lanza 1 moneda. Si sale cara, descarta 1 Energía de 1 de los Pokémon de tu rival.",
		'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel.",
		'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia da uno dei Pokémon del tuo avversario.",
		'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia de 1 dos Pokémon do seu oponente."
	},

	trainerType: "Item",
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684325,
				cardmarket: 877487
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684325,
				cardmarket: 877487
			}
		}
	],

}

export default card
