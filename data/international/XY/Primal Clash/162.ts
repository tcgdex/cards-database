import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Enhanced Hammer",
		'fr-fr': "Maillet Amélioré",
		'es-es': "Martillo Mejorado",
		'it-it': "Supermartello",
		'pt-br': "Martelo Avançado",
		'de-de': "SpezialHammer"
	},

	illustrator: "Ryo Ueda",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Discard a Special Energy attached to 1 of your opponent's Pokémon.",
		'fr-fr': "Défaussez une Énergie spéciale attachée à l'un des Pokémon de votre adversaire.",
		'es-es': "Descarta 1 Energía Especial unida a 1 de los Pokémon de tu rival.",
		'it-it': "Scarta un'Energia speciale assegnata a uno dei Pokémon del tuo avversario.",
		'pt-br': "Descarte uma Energia Especial ligada a 1 dos Pokémon do seu oponente.",
		'de-de': "Lege 1 an ein gegnerisches Pokémon angelegte Spezial-Energie auf den Ablagestapel deines Gegners."
	},

	thirdParty: {
		cardmarket: 273693,
		tcgplayer: 96060
	}
}

export default card
