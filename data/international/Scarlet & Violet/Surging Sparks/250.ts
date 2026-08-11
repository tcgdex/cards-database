import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gravity Mountain",
		'fr-fr': "Montagne Gravité",
		'es-es': "Montaña Gravedad",
		'it-it': "Monte Gravità",
		'pt-br': "Montanha da Gravidade",
		'de-de': "Erdanziehungsberg"
	},

	rarity: "Hyper rare",
	category: "Trainer",

	effect: {
		'en-us': "Each Stage 2 Pokémon in play (both yours and your opponent's) gets -30 HP.",
		'fr-fr': "Chaque Pokémon de Niveau 2 en jeu (les vôtres et ceux de votre adversaire) perd -30 PV.",
		'es-es': "Cada Pokémon de Fase 2 en juego (tanto tuyos como de tu rival) tiene 30 PS menos.",
		'it-it': "Ciascun Pokémon di Fase 2 in gioco, sia tuo che del tuo avversario, ha 30 PS in meno.",
		'pt-br': "Cada Pokémon Estágio 2 em jogo (seus e do seu oponente) recebe 30 PS a menos.",
		'de-de': "Jedes Phase-2-Pokémon im Spiel (deine und die deines Gegners) erhält -30 KP."
	},

	trainerType: "Stadium",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			foil: "gold",
			thirdParty: {
				cardmarket: 794623,
				tcgplayer: 593857
			}
		},
	],

	illustrator: "AYUMI ODASHIMA",

}

export default card
