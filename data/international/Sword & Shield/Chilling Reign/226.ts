import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fan of Waves",
		'fr-fr': "Éventail Houleux",
		'es-es': "Abanico de Olas",
		'it-it': "Ventaglio delle Onde",
		'pt-br': "Leque de Ondas",
		'de-de': "Wellenfächer"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Put a Special Energy attached to 1 of your opponent's Pokémon on the bottom of their deck.",
		'fr-fr': "Placez une Énergie spéciale attachée à l'un des Pokémon de votre adversaire en dessous du deck de celui-ci.",
		'es-es': "Pon 1 Energía Especial unida a 1 de los Pokémon de tu rival en la parte inferior de su baraja.",
		'it-it': "Prendi un'Energia speciale assegnata a uno dei Pokémon del tuo avversario e mettila in fondo al suo mazzo.",
		'pt-br': "Coloque 1 Energia Especial ligada a 1 dos Pokémon do seu oponente como a carta de baixo do baralho dele(a).",
		'de-de': "Lege 1 an ein Pokémon deines Gegners angelegte Spezial-Energie unter sein Deck."
	},

	trainerType: "Item",


	illustrator: "sadaji",
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 567334,
				tcgplayer: 241876
			}
		},
	],
}

export default card
