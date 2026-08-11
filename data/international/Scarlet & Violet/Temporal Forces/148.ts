import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Full Metal Lab",
		'fr-fr': "Labo Métal Pur",
		'es-es': "Laboratorio Metálico Total",
		'it-it': "Laboratorio di Metallo",
		'pt-br': "Laboratório Metálico",
		'de-de': "Vollmetall-Labor"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "{M} Pokémon (both yours and your opponent's) take 30 less damage from attacks from the opponent's Pokémon (after applying Weakness and Resistance).",
		'fr-fr': "Les Pokémon {M} (les vôtres et ceux de votre adversaire) subissent 30 dégâts de moins provenant des attaques des Pokémon de l'adversaire (après application de la Faiblesse et de la Résistance).",
		'es-es': "Los ataques de los Pokémon del rival hacen 30 puntos de daño menos a los Pokémon {M} (tanto tuyos como de tu rival) (después de aplicar Debilidad y Resistencia).",
		'it-it': "I Pokémon {M}, sia tuoi che del tuo avversario, subiscono 30 danni in meno dagli attacchi dei Pokémon dell'avversario, dopo aver applicato debolezza e resistenza.",
		'pt-br': "Os Pokémon {M} (seus e do seu oponente) recebem 30 pontos de dano a menos de ataques dos Pokémon do oponente (depois de aplicar Fraqueza e Resistência).",
		'de-de': "{M}-Pokémon (deinen und denen deines Gegners) werden durch Attacken von Pokémon des Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
	},

	trainerType: "Stadium",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760778,
				tcgplayer: 542663
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760778,
				tcgplayer: 542663
			}
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			foil: "cosmos"
		}
	],

	illustrator: "AYUMI ODASHIMA",

}

export default card