import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Enhanced Hammer",
		fr: "Maillet Amélioré",
		es: "Martillo Mejorado",
		it: "Supermartello",
		pt: "Martelo Avançado",
		de: "SpezialHammer"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez une Énergie spéciale attachée à l'un des Pokémon de votre adversaire.",
		en: "Discard a Special Energy attached to 1 of your opponent's Pokémon.",
		es: "Descarta 1 Energía Especial unida a 1 de los Pokémon de tu rival.",
		it: "Scarta un'Energia speciale assegnata a uno dei Pokémon del tuo avversario.",
		pt: "Descarte uma Energia Especial ligada a 1 dos Pokémon do seu oponente.",
		de: "Lege 1 an ein gegnerisches Pokémon angelegte Spezial-Energie auf den Ablagestapel deines Gegners."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281900
	}
}

export default card
