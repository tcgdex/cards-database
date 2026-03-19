import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Beach Court",
		fr: "Terrain de Plage",
		es: "Cancha en la Playa",
		it: "Campo in Spiaggia",
		pt: "Quadra de Praia",
		de: "Strandplatz"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "The Retreat Cost of each Basic Pokémon in play (both yours and your opponent's) is {C} less.",
		fr: "Le Coût de Retraite de chacun des Pokémon de base en jeu (les vôtres et ceux de votre adversaire) est diminué de {C}.",
		es: "El Coste de Retirada de cada Pokémon Básico en juego (tanto tuyos como de tu rival) es de {C} menos.",
		it: "Il costo di ritirata di ciascun Pokémon Base in gioco, sia tuo che del tuo avversario, è ridotto di {C}.",
		pt: "O custo de Recuo de cada Pokémon Básico em jogo (seus e do seu oponente) é {C} a menos.",
		de: "Die Rückzugskosten aller Basis-Pokémon im Spiel (deiner und der deines Gegners) verringern sich um {C}."
	},

	trainerType: "Stadium",
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Oswaldo KATO",

	thirdParty: {
        cardmarket: 702463,
        tcgplayer: 488072
    }
}

export default card