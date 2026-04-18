import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Paradise Resort",
		fr: "Hôtel « Au paradis des Pokémon »",
		de: "Paradies Resort",
		it: "Resort Paradiso",
		es: "Complejo Turístico Paraíso",
		pt: "Resort Paraíso"
	},

	illustrator: "Naoki Saito",
	rarity: "None",
	category: "Trainer",

	effect: {
		en: "The Retreat Cost of each Psyduck in play (both yours and your opponent's) is {C} less.",
		fr: "Le Coût de Retraite de chacun des Psykokwak en jeu (les vôtres et ceux de votre adversaire) est diminué de {C}.",
		de: "Die Rückzugskosten aller Enton im Spiel (deiner und der deines Gegners) verringern sich um {C}.",
		it: "Il costo di ritirata di ciascuno Psyduck in gioco, sia tuo che del tuo avversario, è ridotto di {C}.",
		es: "El Coste de Retirada de cada Psyduck en juego (tanto tuyos como de tu rival) es de {C} menos.",
		pt: "O custo de Recuo de cada Psyduck em jogo (seus e do seu oponente) é {C} a menos."
	},

	trainerType: "Stadium",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			stamp: ["worlds-2025"]
		},
		{
			type: "normal",
			stamp: ["worlds-2025","staff"]
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
