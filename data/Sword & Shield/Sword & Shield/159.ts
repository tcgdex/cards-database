import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Crushing Hammer",
		fr: "Maillet Écrasant",
		es: "Martillo Demoledor",
		it: "Martello Dirompente",
		pt: "Martelo Esmagador",
		de: "Schmetterhammer"
	},

	illustrator: "sadaji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip a coin. If heads, discard an Energy from 1 of your opponent’s Pokémon.",
		fr: "Lancez une pièce. Si c’est face, défaussez une Énergie de l’un des Pokémon de votre adversaire.",
		es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía de 1 de los Pokémon de tu rival.",
		it: "Lancia una moneta. Se esce testa, scarta un’Energia da uno dei Pokémon del tuo avversario.",
		pt: "Jogue 1 moeda. Se sair cara, descarte 1 Energia de 1 dos Pokémon do seu oponente.",
		de: "Wirf 1 Münze. Lege bei Kopf 1 Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Item",
	regulationMark: "D"
}

export default card
