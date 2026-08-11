import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lively Stadium",
		'fr-fr': "Stade en Liesse",
		'es-es': "Estadio Animado",
		'it-it': "Stadio Gremito",
		'pt-br': "Estádio Animado",
		'de-de': "Belebtes Stadion"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Each Basic Pokémon in play (both yours and your opponent's) gets +30 HP.",
		'fr-fr': "Chaque Pokémon de base en jeu (les vôtres et ceux de votre adversaire) reçoit +30 PV.",
		'es-es': "Cada Pokémon Básico en juego (tanto tuyos como de tu rival) obtiene 30 PS más.",
		'it-it': "Ciascun Pokémon Base in gioco, sia tuo che del tuo avversario, ha 30 PS in più.",
		'pt-br': "Cada Pokémon Básico em jogo (seus e do seu oponente) recebe 30 PS a mais.",
		'de-de': "Jedes Basis-Pokémon im Spiel (deine und die deines Gegners) erhält +30 KP."
	},

	trainerType: "Stadium",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794553,
				tcgplayer: 589991
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794553,
				tcgplayer: 589991
			}
		},
	],

	illustrator: "imoniii",

}

export default card
