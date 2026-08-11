import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

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

	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Flip a coin. If heads, discard an Energy from 1 of your opponent's Pokémon.",
		'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie de l'un des Pokémon de votre adversaire.",
		'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía de uno de los Pokémon de tu rival.",
		'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia da uno dei Pokémon del tuo avversario.",
		'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia de 1 dos Pokémon do seu oponente.",
		'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Ayaka Yoshida",

	thirdParty: {
        cardmarket: 702464,
        tcgplayer: 488073
    }
}

export default card