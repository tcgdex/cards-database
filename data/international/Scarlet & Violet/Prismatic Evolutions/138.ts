import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Giacomo",
		'fr-fr': "Brome",
		'es-es': "Anán",
		'pt-br': "Giacomo",
		'it-it': "Romelio",
		'de-de': "Pinio"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Discard a Special Energy from each of your opponent's Pokémon.",
		'fr-fr': "Défaussez une Énergie spéciale de chacun des Pokémon de votre adversaire.",
		'es-es': "Descarta 1 Energía Especial de cada uno de los Pokémon de tu rival.",
		'pt-br': "Descarte uma Energia Especial de cada um dos Pokémon do seu oponente.",
		'it-it': "Scarta un'Energia speciale da ciascuno dei Pokémon del tuo avversario.",
		'de-de': "Lege 1 Spezial-Energie von jedem Pokémon deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	illustrator: "GOSSAN",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805532,
				tcgplayer: 610493
			}
		},
	],
}

export default card
