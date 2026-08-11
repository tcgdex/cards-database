import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Glass Trumpet",
		'fr-fr': "Trompette de Verre",
		'es-es': "Trompeta de Cristal",
		'pt-br': "Trompete de Vidro",
		'it-it': "Tromba di Vetro",
		'de-de': "Glastrompete"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "You can use this card only if you have any Tera Pokémon in play.\n\nChoose up to 2 of your Benched {C} Pokémon and attach a Basic Energy card from your discard pile to each of them.",
		'fr-fr': "Vous ne pouvez utiliser cette carte que si vous avez au moins un Pokémon Téracristal en jeu.\n\nChoisissez jusqu'à 2 de vos Pokémon {C} de Banc, puis attachez une carte Énergie de base de votre pile de défausse à chacun d'eux.",
		'es-es': "Puedes usar esta carta solo si tienes algún Pokémon Teracristal en juego.\n\nElige hasta 2 de tus Pokémon {C} en Banca y une 1 carta de Energía Básica de tu pila de descartes a cada uno de ellos.",
		'pt-br': "Você só pode usar esta carta se tiver algum Pokémon Tera em jogo.\n\nEscolha até 2 dos seus Pokémon {C} no Banco e ligue uma carta de Energia Básica da sua pilha de descarte a cada um deles.",
		'it-it': "Puoi usare questa carta solo se hai dei Pokémon Teracristal in gioco.\n\nScegli fino a due dei tuoi Pokémon {C} in panchina e assegna a ognuno di essi una carta Energia base dalla tua pila degli scarti.",
		'de-de': "Du kannst diese Karte nur einsetzen, wenn du mindestens 1 Terakristall-Pokémon im Spiel hast.\n\nWähle bis zu 2 {C}-Pokémon auf deiner Bank und lege 1 Basis-Energiekarte aus deinem Ablagestapel an jedes von ihnen an."
	},

	trainerType: "Item",
	regulationMark: "H",
	illustrator: "Toyste Beach",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805504,
				tcgplayer: 610465
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805504,
				tcgplayer: 610465
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806576,
				tcgplayer: 610621
			}
		},
	],
}

export default card
