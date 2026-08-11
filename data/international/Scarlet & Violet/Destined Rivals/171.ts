import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Ariana",
		'fr-fr': "Ariane de la Team Rocket",
		'de-de': "Team Rockets Athena",
		'it-it': "Atena del Team Rocket",
		'es-es': "Atenea del Team Rocket",
		'pt-br': "Athena da Equipe Rocket",
		'es-mx': "Atenea del Equipo Rocket"
	},


	illustrator: "hncl",

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Draw cards until you have 5 cards in your hand. If all of your Pokémon in play are Team Rocket's Pokémon, draw cards until you have 8 cards in your hand instead.",
		'fr-fr': "Piochez des cartes jusqu'à en avoir 5 en main. Si tous vos Pokémon en jeu sont des Pokémon de la Team Rocket, piochez des cartes jusqu'à en avoir 8 en main à la place.",
		'de-de': "Ziehe so lange Karten, bis du 5 Karten auf deiner Hand hast. Wenn alle deine Pokémon im Spiel Team Rockets Pokémon sind, ziehe stattdessen so lange Karten, bis du 8 Karten auf deiner Hand hast.",
		'it-it': "Pesca fino ad avere cinque carte in mano. Se tutti i tuoi Pokémon in gioco sono Pokémon del Team Rocket, invece pesca fino ad avere otto carte in mano.",
		'es-es': "Roba cartas hasta que tengas 5 cartas en tu mano. Si todos tus Pokémon en juego son Pokémon del Team Rocket, roba cartas hasta que tengas 8 cartas en tu mano en vez de 5.",
		'pt-br': "Compre cartas até ter 5 cartas na sua mão. Se todos os seus Pokémon em jogo forem Pokémon da Equipe Rocket, compre cartas até ter 8 cartas na sua mão ao invés de 5.",
		'es-mx': "Roba cartas hasta que tengas 5 cartas en tu mano. Si todos tus Pokémon en juego son Pokémon del Equipo Rocket, roba cartas hasta que tengas 8 cartas en tu mano en lugar de 5."
	},

	trainerType: "Supporter",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826045,
				tcgplayer: 632972
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826045,
				tcgplayer: 632972
			}
		},
	],
}

export default card
