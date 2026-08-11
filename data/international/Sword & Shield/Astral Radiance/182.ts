import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Choy",
		'fr-fr': "Sica",
		'es-es': "Choi",
		'it-it': "Choi",
		'pt-br': "Choi",
		'de-de': "Taiso"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Each player reveals their hand. Draw 3 cards.",
		'fr-fr': "Chaque joueur montre sa main. Piochez 3 cartes.",
		'es-es': "Cada jugador enseña las cartas de su mano. Roba 3 cartas.",
		'it-it': "Ciascun giocatore mostra le carte che ha in mano. Pesca tre carte.",
		'pt-br': "Cada jogador revela a própria mão. Compre 3 cartas.",
		'de-de': "Jeder Spieler zeigt seine Handkarten. Ziehe 3 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658843,
				tcgplayer: 272432
			}
		},
	],
}

export default card
