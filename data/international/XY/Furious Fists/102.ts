import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Training Center",
		'fr-fr': "Centre d'Entraînement",
		'es-es': "Centro de Entrenamiento",
		'it-it': "Centro Allenamento",
		'pt-br': "Centro de Treinamento",
		'de-de': "Trainingscenter"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Ajoute 30 PV à chacun des Pokémon de Niveau 1 et de Niveau 2 en jeu (les vôtres et ceux de votre adversaire).",
		'en-us': "Each Stage 1 and Stage 2 Pokémon in play (both yours and your opponent's) gets +30 HP.",
		'es-es': "Cada Pokémon de Fase 1 y de Fase 2 en juego (tanto tuyos como de tu rival) obtiene 30 PS más.",
		'it-it': "Tutti i Pokémon di Fase 1 e di Fase 2 in gioco, sia tuoi che del tuo avversario, hanno 30 PS in più.",
		'pt-br': "Cada Pokémon Estágio 1 e Estágio 2 em jogo (seu e do seu oponente) recebe +30 PS.",
		'de-de': "Jedes Phase-1- und Phase-2-Pokémon im Spiel (deine und die deines Gegners) erhält +30 KP."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 281766,
		tcgplayer: 92285
	}
}

export default card
