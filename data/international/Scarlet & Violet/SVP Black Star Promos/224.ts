import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Paradise Resort",
		'fr-fr': "Hôtel « Au paradis des Pokémon »",
		'de-de': "Paradies Resort",
		'it-it': "Resort Paradiso",
		'es-es': "Complejo Turístico Paraíso",
		'pt-br': "Resort Paraíso"
	},

	illustrator: "Naoki Saito",
	rarity: "Promo",
	category: "Trainer",

	effect: {
		'en-us': "The Retreat Cost of each Psyduck in play (both yours and your opponent's) is {C} less.",
		'fr-fr': "Le Coût de Retraite de chacun des Psykokwak en jeu (les vôtres et ceux de votre adversaire) est diminué de {C}.",
		'de-de': "Die Rückzugskosten aller Enton im Spiel (deiner und der deines Gegners) verringern sich um {C}.",
		'it-it': "Il costo di ritirata di ciascuno Psyduck in gioco, sia tuo che del tuo avversario, è ridotto di {C}.",
		'es-es': "El Coste de Retirada de cada Psyduck en juego (tanto tuyos como de tu rival) es de {C} menos.",
		'pt-br': "O custo de Recuo de cada Psyduck em jogo (seus e do seu oponente) é {C} a menos."
	},

	trainerType: "Stadium",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			stamp: ["worlds-2025"],
			thirdParty: {
				tcgplayer: 649232
			},
		},
		{
			type: "normal",
			stamp: ["worlds-2025","staff"],
			thirdParty: {
				tcgplayer: 649234
			},
		},
		{
			type: "normal",
			stamp: ["worlds-2025","top-thirty-two"]
		},
		{
			type: "normal",
			stamp: ["worlds-2025","top-sixteen"]
		},
		{
			type: "normal",
			stamp: ["worlds-2025","top-eight"]
		},
		{
			type: "normal",
			stamp: ["worlds-2025","semi-finalist"]
		},
		{
			type: "normal",
			stamp: ["worlds-2025","finalist"]
		},
	]
}

export default card
