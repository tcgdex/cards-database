import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Lake Acuity",
		fr: "Lac Savoir",
		es: "Lago Agudeza",
		it: "Acutezza Lacustre",
		pt: "Lago da Verdade",
		de: "See der Stärke"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "All Pokémon that have any Water or Fighting Energy attached (both yours and your opponent's) take 20 less damage from attacks from the opponent's Pokémon (after applying Weakness and Resistance).",
		fr: "Tous les Pokémon qui ont de l'Énergie Water ou Fighting attachée (les vôtres et ceux de votre adversaire) subissent 20 dégâts de moins provenant des attaques des Pokémon de l'adversaire (après application de la Faiblesse et de la Résistance).",
		es: "Los ataques de los Pokémon del rival hacen 20 puntos de daño menos a todos los Pokémon que tengan alguna Energía Water o Fighting unida a ellos (tanto tuyos como de tu rival) (después de aplicar Debilidad y Resistencia).",
		it: "Tutti i Pokémon che hanno delle Energie Water o Fighting assegnate, sia tuoi che del tuo avversario, subiscono 20 danni in meno dagli attacchi dei Pokémon dell'avversario, dopo aver applicato debolezza e resistenza.",
		pt: "Todos os Pokémon que tiverem alguma Energia Water ou Fighting ligadas a eles (seus e do seu oponente) recebem 20 pontos de dano a menos de ataques dos Pokémon do oponente (depois de aplicar Fraqueza e Resistência).",
		de: "Allen Pokémon (deinen und denen deines Gegners), an die mindestens 1 Water- oder Fighting-Energie angelegt ist, werden durch Attacken von Pokémon des Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
	},

	trainerType: "Stadium",
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674168,
		tcgplayer: 284092
	}
}

export default card