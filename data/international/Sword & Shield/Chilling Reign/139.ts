import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Adriane",
		'en-us': "Flannery",
		'es-es': "Candela",
		'it-it': "Fiammetta",
		'pt-br': "Flannery",
		'de-de': "Flavia"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Défaussez une Énergie spéciale de l'un des Pokémon de votre adversaire, et défaussez un Stade en jeu.",
		'en-us': "Discard a Special Energy from 1 of your opponent's Pokémon, and discard a Stadium in play.",
		'es-es': "Descarta 1 Energía Especial de 1 de los Pokémon de tu rival y descarta un Estadio en juego.",
		'it-it': "Scarta un'Energia speciale da uno dei Pokémon del tuo avversario e una carta Stadio in gioco.",
		'pt-br': "Descarte 1 Energia Especial de 1 dos Pokémon do seu oponente e descarte 1 Estádio em jogo.",
		'de-de': "Lege 1 Spezial-Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel und lege 1 Stadionkarte im Spiel auf den Ablagestapel."
	},

	trainerType: "Supporter",
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567247,
				tcgplayer: 241832
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567247,
				tcgplayer: 241832
			}
		},
	],
}

export default card
