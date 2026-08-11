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
	regulationMark: "G",
	illustrator: "Naoki Saito",
	variants: [
		{
			type: "normal",
			stamp: ["worlds-2023"],
			thirdParty: {
				cardmarket: 726924,
				tcgplayer: 518863
			},
		},
		{
			type: "normal",
			stamp: ["worlds-2023","staff"],
			thirdParty: {
				cardmarket: 727542,
				tcgplayer: 583700
			},
		},
		{
			type: "normal",
			stamp: ["worlds-2023","top-thirty-two"]
		},
		{
			type: "normal",
			stamp: ["worlds-2023","top-sixteen"]
		},
		{
			type: "normal",
			stamp: ["worlds-2023","top-eight"]
		},
		{
			type: "normal",
			stamp: ["worlds-2023","semi-finalist"]
		},
		{
			type: "normal",
			stamp: ["worlds-2023","finalist"]
		},
	]
}

export default card
