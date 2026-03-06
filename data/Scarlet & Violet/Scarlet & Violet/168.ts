import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Crushing Hammer",
		fr: "Maillet Écrasant",
		es: "Martillo Demoledor",
		it: "Martello Dirompente",
		pt: "Martelo Esmagador",
		de: "Schmetterhammer"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Flip a coin. If heads, discard an Energy from 1 of your opponent's Pokémon.",
		fr: "Lancez une pièce. Si c'est face, défaussez une Énergie de l'un des Pokémon de votre adversaire.",
		es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía de uno de los Pokémon de tu rival.",
		it: "Lancia una moneta. Se esce testa, scarta un'Energia da uno dei Pokémon del tuo avversario.",
		pt: "Jogue uma moeda. Se sair cara, descarte uma Energia de 1 dos Pokémon do seu oponente.",
		de: "Wirf 1 Münze. Lege bei Kopf 1 Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Ayaka Yoshida",

	thirdParty: {
        cardmarket: 702464,
        tcgplayer: 488073
    }
}

export default card