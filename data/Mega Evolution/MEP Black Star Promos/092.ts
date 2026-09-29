import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Paradise Resort",
		fr: "Hôtel « Au paradis des Pokémon »",
		es: "Complejo Turístico Paraíso",
		de: "Paradies Resort",
		it: "Resort Paradiso",
		pt: "Resort Paraíso",
	},

	illustrator: "Naoki Saito",
	rarity: "Promo",
	category: "Trainer",
	trainerType: "Stadium",

	effect: {
		en: "The Retreat Cost of each Psyduck in play (both yours and your opponent's) is {C} less.",
		fr: "Le Coût de Retraite de chacun des Psykokwak en jeu (les vôtres et ceux de votre adversaire) est diminué de {C}.",
		es: "El Coste de Retirada de cada Psyduck en juego (tanto tuyos como de tu rival) es de {C} menos.",
		de: "Die Rückzugskosten aller Enton im Spiel (deiner und der deines Gegners) verringern sich um {C}.",
		it: "Il costo di ritirata di ciascuno Psyduck in gioco, sia tuo che del tuo avversario, è ridotto di {C}.",
		pt: "O custo de Recuo de cada Psyduck em jogo (seus e do seu oponente) é {C} a menos.",
	},
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 903686,
				tcgplayer: 714597
			}
		},
		{
			type: "holo",
			stamp: ["staff"],
			thirdParty: {
				tcgplayer: 714598
			}
		}
	],
}

export default card
