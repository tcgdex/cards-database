import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Enhanced Hammer",
		fr: "Maillet Amélioré",
		es: "Martillo Mejorado",
		it: "Supermartello",
		pt: "Martelo Avançado",
		de: "Spezial-Hammer"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Discard a Special Energy from 1 of your opponent's Pokémon.",
		fr: "Défaussez une Énergie spéciale de l'un des Pokémon de votre adversaire.",
		es: "Descarta 1 Energía Especial de uno de los Pokémon de tu rival.",
		it: "Scarta un'Energia speciale da uno dei Pokémon del tuo avversario.",
		pt: "Descarte uma Energia Especial de 1 dos Pokémon do seu oponente.",
		de: "Lege 1 Spezial-Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card