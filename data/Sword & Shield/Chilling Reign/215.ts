import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Flannery",
		fr: "Adriane",
		es: "Candela",
		it: "Fiammetta",
		pt: "Flannery",
		de: "Flavia"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Discard a Special Energy from 1 of your opponent's Pokémon, and discard a Stadium in play.",
		fr: "Défaussez une Énergie spéciale de l'un des Pokémon de votre adversaire, et défaussez un Stade en jeu.",
		es: "Descarta 1 Energía Especial de 1 de los Pokémon de tu rival y descarta un Estadio en juego.",
		it: "Scarta un'Energia speciale da uno dei Pokémon del tuo avversario e una carta Stadio in gioco.",
		pt: "Descarte 1 Energia Especial de 1 dos Pokémon do seu oponente e descarte 1 Estádio em jogo.",
		de: "Lege 1 Spezial-Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel und lege 1 Stadionkarte im Spiel auf den Ablagestapel."
	},

	trainerType: "Supporter",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	illustrator: "Ryuta Fuse",
	regulationMark: "E",

	thirdParty: {
		cardmarket: 567247,
		tcgplayer: 241834
	}
}

export default card
