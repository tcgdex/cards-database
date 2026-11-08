import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Brome",
		'en-us': "Giacomo",
		'es-es': "Anán",
		'it-it': "Romelio",
		'pt-br': "Giacomo",
		'de-de': "Pinio"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Défaussez une Énergie spéciale de chacun des Pokémon de votre adversaire.",
		'en-us': "Discard a Special Energy from each of your opponent's Pokémon.",
		'es-es': "Descarta 1 Energía Especial de cada uno de los Pokémon de tu rival.",
		'it-it': "Scarta un'Energia speciale da ciascuno dei Pokémon del tuo avversario.",
		'pt-br': "Descarte uma Energia Especial de cada um dos Pokémon do seu oponente.",
		'de-de': "Lege 1 Spezial-Energie von jedem Pokémon deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715657,
				tcgplayer: 497554,
				cardtrader: 248835
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715657,
				tcgplayer: 497554,
				cardtrader: 248835
			}
		},
	],

	illustrator: "Akira Komayama",

	
}

export default card
