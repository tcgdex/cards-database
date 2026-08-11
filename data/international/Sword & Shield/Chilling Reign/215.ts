import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Flannery",
		'fr-fr': "Adriane",
		'es-es': "Candela",
		'it-it': "Fiammetta",
		'pt-br': "Flannery",
		'de-de': "Flavia"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Discard a Special Energy from 1 of your opponent's Pokémon, and discard a Stadium in play.",
		'fr-fr': "Défaussez une Énergie spéciale de l'un des Pokémon de votre adversaire, et défaussez un Stade en jeu.",
		'es-es': "Descarta 1 Energía Especial de 1 de los Pokémon de tu rival y descarta un Estadio en juego.",
		'it-it': "Scarta un'Energia speciale da uno dei Pokémon del tuo avversario e una carta Stadio in gioco.",
		'pt-br': "Descarte 1 Energia Especial de 1 dos Pokémon do seu oponente e descarte 1 Estádio em jogo.",
		'de-de': "Lege 1 Spezial-Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel und lege 1 Stadionkarte im Spiel auf den Ablagestapel."
	},

	trainerType: "Supporter",


	illustrator: "Ryuta Fuse",
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 567323,
				tcgplayer: 241834
			}
		},
	],
}

export default card
