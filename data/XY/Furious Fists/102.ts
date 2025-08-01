import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Training Center",
		fr: "Centre d'Entraînement",
		es: "Centro de Entrenamiento",
		it: "Centro Allenamento",
		pt: "Centro de Treinamento",
		de: "Trainingscenter"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Ajoute 30 PV à chacun des Pokémon de Niveau 1 et de Niveau 2 en jeu (les vôtres et ceux de votre adversaire).",
		en: "Each Stage 1 and Stage 2 Pokémon in play (both yours and your opponent's) gets +30 HP.",
		es: "Cada Pokémon de Fase 1 y de Fase 2 en juego (tanto tuyos como de tu rival) obtiene 30 PS más.",
		it: "Tutti i Pokémon di Fase 1 e di Fase 2 in gioco, sia tuoi che del tuo avversario, hanno 30 PS in più.",
		pt: "Cada Pokémon Estágio 1 e Estágio 2 em jogo (seu e do seu oponente) recebe +30 PS.",
		de: "Jedes Phase-1- und Phase-2-Pokémon im Spiel (deine und die deines Gegners) erhält +30 KP."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 281766
	}
}

export default card
