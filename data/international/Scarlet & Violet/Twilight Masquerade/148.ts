import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Enhanced Hammer",
		'fr-fr': "Maillet Amélioré",
		'es-es': "Martillo Mejorado",
		'it-it': "Supermartello",
		'pt-br': "Martelo Avançado",
		'de-de': "Spezial-Hammer"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Discard a Special Energy from 1 of your opponent's Pokémon.",
		'fr-fr': "Défaussez une Énergie spéciale de l'un des Pokémon de votre adversaire.",
		'es-es': "Descarta 1 Energía Especial de uno de los Pokémon de tu rival.",
		'it-it': "Scarta un'Energia speciale da uno dei Pokémon del tuo avversario.",
		'pt-br': "Descarte uma Energia Especial de 1 dos Pokémon do seu oponente.",
		'de-de': "Lege 1 Spezial-Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769322,
				tcgplayer: 550192
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769322,
				tcgplayer: 550192
			}
		},
	],

	illustrator: "Eske Yoshinob",

}

export default card