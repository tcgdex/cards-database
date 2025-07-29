import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Enhanced Hammer",
		fr: "Maillet Amélioré",
		es: "Martillo Mejorado",
		it: "Supermartello",
		pt: "Martelo Avançado",
		de: "Spezial-Hammer"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez une Énergie spéciale attachée à l’un des Pokémon de votre adversaire.",
		en: "Discard a Special Energy from 1 of your opponent’s Pokémon.",
		es: "Descarta 1 Energía Especial de 1 de los Pokémon de tu rival.",
		it: "Scarta un’Energia speciale assegnata a uno dei Pokémon del tuo avversario.",
		pt: "Descarte 1 Energia Especial de 1 dos Pokémon do seu oponente.",
		de: "Lege 1 Spezial-Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 297576
	}
}

export default card
