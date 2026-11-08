import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Studio d'Entraînement",
		'en-us': "Practice Studio",
		'es-es': "Sala de Entrenamiento",
		'it-it': "Sala Attrezzi",
		'pt-br': "Academia de Exercícios",
		'de-de': "Trainingsstudio"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Les attaques des Pokémon de Niveau 1 (les vôtres et ceux de votre adversaire) infligent 10 dégâts supplémentaires au Pokémon Actif de l'adversaire (avant application de la Faiblesse et de la Résistance).",
		'en-us': "The attacks of Stage 1 Pokémon (both yours and your opponent's) do 10 more damage to the opponent's Active Pokémon (before applying Weakness and Resistance).",
		'es-es': "Los ataques de los Pokémon de Fase 1 (tanto tuyos como de tu rival) hacen 10 puntos de daño más al Pokémon Activo del rival (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Gli attacchi dei Pokémon di Fase 1, sia tuoi che del tuo avversario, infliggono 10 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Os ataques dos Pokémon Estágio 1 (seus e do seu oponente) causam 10 pontos de dano a mais ao Pokémon Ativo do oponente (antes de aplicar Fraqueza e Resistência).",
		'de-de': "Die Attacken von Phase-1-Pokémon (deinen und denen deines Gegners) fügen dem Aktiven Pokémon des Gegners 10 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Stadium",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715661,
				tcgplayer: 497558,
				cardtrader: 248838
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715661,
				tcgplayer: 497558,
				cardtrader: 248838
			}
		},
	],

	illustrator: "AYUMI ODASHIMA",

	
}

export default card
