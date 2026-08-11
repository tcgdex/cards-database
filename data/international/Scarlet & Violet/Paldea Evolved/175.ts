import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Terres Arides de Désastre",
		'en-us': "Calamitous Wasteland",
		'es-es': "Páramo Funesto",
		'it-it': "Landa della Disgrazia",
		'pt-br': "Ermo Calamitoso",
		'de-de': "Unheilvolle Einöde"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Le Coût de Retraite de chacun des Pokémon non-{F} de base en jeu (les vôtres et ceux de votre adversaire) est augmenté de {C}.",
		'en-us': "The Retreat Cost of each Basic non-{F} Pokémon in play (both yours and your opponent's) is {C} more.",
		'es-es': "El Coste de Retirada de cada Pokémon no {F} Básico en juego (tanto tuyos como de tu rival) es de {C} más.",
		'it-it': "Il costo di ritirata di ciascun Pokémon Base non di tipo {F} in gioco, sia tuo che del tuo avversario, aumenta di {C}.",
		'pt-br': "O custo de Recuo de cada Pokémon Básico em jogo que não seja de tipo {F} (seus e do seu oponente) é {C} a mais.",
		'de-de': "Die Rückzugskosten aller Basis-Pokémon im Spiel (deiner und der deines Gegners), die keine {F}-Pokémon sind, erhöhen sich um {C}."
	},

	trainerType: "Stadium",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715650,
				tcgplayer: 497547,
				cardtrader: 248828
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715650,
				tcgplayer: 497547,
				cardtrader: 248828
			}
		},
	],

	illustrator: "AYUMI ODASHIMA",

	
}

export default card
