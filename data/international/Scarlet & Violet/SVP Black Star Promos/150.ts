import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Paradise Resort",
		'fr-fr': "Hôtel \" Au paradis des Pokémon \"",
		'es-es': "Complejo Turístico Paraíso",
		'it-it': "Resort Paradiso",
		'pt-br': "Resort Paraíso",
		'de-de': "Paradies Resort"
	},

	rarity: "Promo",
	category: "Trainer",

	effect: {
		'en-us': "The Retreat Cost of each Psyduck in play (both yours and your opponent's) is {C} less.",
		'fr-fr': "Le Coût de Retraite de chacun des Psykokwak en jeu (les vôtres et ceux de votre adversaire) est diminué de {C}.",
		'es-es': "El Coste de Retirada de cada Psyduck en juego (tanto tuyos como de tu rival) es de {C} menos.",
		'it-it': "Il costo di ritirata di ciascuno Psyduck in gioco, sia tuo che del tuo avversario, è ridotto di {C}.",
		'pt-br': "O custo de Recuo de cada Psyduck em jogo (seus e do seu oponente) é {C} a menos.",
		'de-de': "Die Rückzugskosten aller Enton im Spiel (deiner und der deines Gegners) verringern sich um {C}."
	},

	trainerType: "Stadium",
	regulationMark: "H",
	illustrator: "Naoki Saito",
	variants: [
		{
			type: "normal",
			stamp: ["worlds-2024"],
			thirdParty: {
				cardmarket: 783445,
				tcgplayer: 578146
			},
		},
		{
			type: "normal",
			stamp: ["worlds-2024","staff"],
			thirdParty: {
				cardmarket: 783446,
				tcgplayer: 583726
			},
		},
		{
			type: "normal",
			stamp: ["worlds-2024","top-thirty-two"]
		},
		{
			type: "normal",
			stamp: ["worlds-2024","top-sixteen"]
		},
		{
			type: "normal",
			stamp: ["worlds-2024","top-eight"]
		},
		{
			type: "normal",
			stamp: ["worlds-2024","semi-finalist"]
		},
		{
			type: "normal",
			stamp: ["worlds-2024","finalist"]
		},
	]
}

export default card
