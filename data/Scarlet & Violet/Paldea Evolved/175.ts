import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Terres Arides de Désastre",
		en: "Calamitous Wasteland",
		es: "Páramo Funesto",
		it: "Landa della Disgrazia",
		pt: "Ermo Calamitoso",
		de: "Unheilvolle Einöde"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Le Coût de Retraite de chacun des Pokémon non-{F} de base en jeu (les vôtres et ceux de votre adversaire) est augmenté de {C}.",
		en: "The Retreat Cost of each Basic non-{F} Pokémon in play (both yours and your opponent's) is {C} more.",
		es: "El Coste de Retirada de cada Pokémon no {F} Básico en juego (tanto tuyos como de tu rival) es de {C} más.",
		it: "Il costo di ritirata di ciascun Pokémon Base non di tipo {F} in gioco, sia tuo che del tuo avversario, aumenta di {C}.",
		pt: "O custo de Recuo de cada Pokémon Básico em jogo que não seja de tipo {F} (seus e do seu oponente) é {C} a mais.",
		de: "Die Rückzugskosten aller Basis-Pokémon im Spiel (deiner und der deines Gegners), die keine {F}-Pokémon sind, erhöhen sich um {C}."
	},

	trainerType: "Stadium",
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "AYUMI ODASHIMA",

	thirdParty: {
		cardmarket: 715650
	}
}

export default card