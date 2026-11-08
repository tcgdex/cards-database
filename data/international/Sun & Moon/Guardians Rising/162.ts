import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Enhanced Hammer",
		'fr-fr': "Maillet Amélioré",
		'es-es': "Martillo Mejorado",
		'it-it': "Supermartello",
		'pt-br': "Martelo Avançado",
		'de-de': "Spezial-Hammer"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez une Énergie spéciale attachée à l’un des Pokémon de votre adversaire.",
		'en-us': "Discard a Special Energy from 1 of your opponent’s Pokémon.",
		'es-es': "Descarta 1 Energía Especial de 1 de los Pokémon de tu rival.",
		'it-it': "Scarta un’Energia speciale assegnata a uno dei Pokémon del tuo avversario.",
		'pt-br': "Descarte 1 Energia Especial de 1 dos Pokémon do seu oponente.",
		'de-de': "Lege 1 Spezial-Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 297610,
		tcgplayer: 131058
	}
}

export default card
