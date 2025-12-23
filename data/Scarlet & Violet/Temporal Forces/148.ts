import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Full Metal Lab",
		fr: "Labo Métal Pur",
		es: "Laboratorio Metálico Total",
		it: "Laboratorio di Metallo",
		pt: "Laboratório Metálico",
		de: "Vollmetall-Labor"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "{M} Pokémon (both yours and your opponent's) take 30 less damage from attacks from the opponent's Pokémon (after applying Weakness and Resistance).",
		fr: "Les Pokémon {M} (les vôtres et ceux de votre adversaire) subissent 30 dégâts de moins provenant des attaques des Pokémon de l'adversaire (après application de la Faiblesse et de la Résistance).",
		es: "Los ataques de los Pokémon del rival hacen 30 puntos de daño menos a los Pokémon {M} (tanto tuyos como de tu rival) (después de aplicar Debilidad y Resistencia).",
		it: "I Pokémon {M}, sia tuoi che del tuo avversario, subiscono 30 danni in meno dagli attacchi dei Pokémon dell'avversario, dopo aver applicato debolezza e resistenza.",
		pt: "Os Pokémon {M} (seus e do seu oponente) recebem 30 pontos de dano a menos de ataques dos Pokémon do oponente (depois de aplicar Fraqueza e Resistência).",
		de: "{M}-Pokémon (deinen und denen deines Gegners) werden durch Attacken von Pokémon des Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
	},

	trainerType: "Stadium",
	regulationMark: "H",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			foil: "cosmos"
		}
	],

	illustrator: "AYUMI ODASHIMA",

	thirdParty: {
		cardmarket: 760778
	}
}

export default card