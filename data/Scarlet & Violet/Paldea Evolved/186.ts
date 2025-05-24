import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Studio d'Entraînement",
		en: "Practice Studio",
		es: "Sala de Entrenamiento",
		it: "Sala Attrezzi",
		pt: "Academia de Exercícios",
		de: "Trainingsstudio"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Les attaques des Pokémon de Niveau 1 (les vôtres et ceux de votre adversaire) infligent 10 dégâts supplémentaires au Pokémon Actif de l'adversaire (avant application de la Faiblesse et de la Résistance).",
		en: "The attacks of Stage 1 Pokémon (both yours and your opponent's) do 10 more damage to the opponent's Active Pokémon (before applying Weakness and Resistance).",
		es: "Los ataques de los Pokémon de Fase 1 (tanto tuyos como de tu rival) hacen 10 puntos de daño más al Pokémon Activo del rival (antes de aplicar Debilidad y Resistencia).",
		it: "Gli attacchi dei Pokémon di Fase 1, sia tuoi che del tuo avversario, infliggono 10 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		pt: "Os ataques dos Pokémon Estágio 1 (seus e do seu oponente) causam 10 pontos de dano a mais ao Pokémon Ativo do oponente (antes de aplicar Fraqueza e Resistência).",
		de: "Die Attacken von Phase-1-Pokémon (deinen und denen deines Gegners) fügen dem Aktiven Pokémon des Gegners 10 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Stadium",
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "AYUMI ODASHIMA"
}

export default card