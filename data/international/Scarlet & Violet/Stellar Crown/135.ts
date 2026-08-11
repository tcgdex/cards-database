import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Glass Trumpet",
		'fr-fr': "Trompette de Verre",
		'es-es': "Trompeta de Cristal",
		'it-it': "Tromba di Vetro",
		'pt-br': "Trompete de Vidro",
		'de-de': "Glastrompete"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "You can use this card only if you have any Tera Pokémon in play.\n\nChoose up to 2 of your Benched {C} Pokémon and attach a Basic Energy card from your discard pile to each of them.",
		'fr-fr': "Vous ne pouvez utiliser cette carte que si vous avez au moins un Pokémon Téracristal en jeu.\nChoisissez jusqu'à 2 de vos Pokémon {C} de Banc, puis attachez une carte Énergie de base de votre pile de défausse à chacun d'eux.",
		'es-es': "Puedes usar esta carta solo si tienes algún Pokémon Teracristal en juego.\n\nElige hasta 2 de tus Pokémon {C} en Banca y une 1 carta de Energía Básica de tu pila de descartes a cada uno de ellos.",
		'it-it': "Puoi usare questa carta solo se hai dei Pokémon Teracristal in gioco.\nScegli fino a due dei tuoi Pokémon {C} in panchina e assegna a ognuno di essi una carta Energia base dalla tua pila degli scarti.",
		'pt-br': "Você só pode usar esta carta se tiver algum Pokémon Tera em jogo.\nEscolha até 2 dos seus Pokémon {C} no Banco e ligue uma carta de Energia Básica da sua pilha de descarte a cada um deles.",
		'de-de': "Du kannst diese Karte nur einsetzen, wenn du mindestens 1 Terakristall-Pokémon im Spiel hast.\nWähle bis zu 2 {C}-Pokémon auf deiner Bank und lege 1 Basis-Energiekarte aus deinem Ablagestapel an jedes von ihnen an."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785989,
				tcgplayer: 567394
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785989,
				tcgplayer: 567394
			}
		},
	],

	illustrator: "Toyste Beach",

}

export default card
