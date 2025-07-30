import { Card } from '../../../interfaces'
import Set from '../Kalos Starter Set'

const card: Card = {
	name: {
		en: "Crushing Hammer",
		fr: "Maillet Écrasant",
		es: "Martillo Demoledor",
		it: "Martello Dirompente",
		pt: "Martelo Esmagador",
		de: "Schmetterhammer"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée à l'un des Pokémon de votre adversaire.",
		en: "Flip a coin. If heads, discard an Energy attached to 1 of your opponent's Pokémon.",
		es: "Lanza una moneda. Si sale cara, descarta una Energía unida a 1 de los Pokémon de tu rival.",
		it: "Lancia una moneta. Se esce testa, scarta un'Energia assegnata a uno dei Pokémon del tuo avversario.",
		pt: "Jogue uma moeda. Se sair cara, descarte uma Energia ligada a 1 dos Pokémon do seu oponente.",
		de: "Wirf 1 Münze. Lege bei \"Kopf\" 1 an das gegnerische Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281300
	}
}

export default card
