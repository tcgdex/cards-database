import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Watchtower",
		'fr-fr': "Tour d'Observation de la Team Rocket",
		'de-de': "Team Rockets Wachturm",
		'it-it': "Torre di Guardia del Team Rocket",
		'es-es': "Torre de Defensa del Team Rocket",
		'pt-br': "Torre de Vigia da Equipe Rocket",
		'es-mx': "Torre de Vigilancia del Equipo Rocket"
	},


	illustrator: "AYUMI ODASHIMA",

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "{C} Pokémon in play (both yours and your opponent's) have no Abilities.",
		'fr-fr': "Les Pokémon {C} en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
		'de-de': "{C}-Pokémon im Spiel (deine und die deines Gegners) haben keine Fähigkeiten.",
		'it-it': "I Pokémon {C} in gioco, sia tuoi che del tuo avversario, non hanno abilità.",
		'es-es': "Los Pokémon {C} en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
		'pt-br': "Pokémon {C} em jogo (seus e do seu oponente) não têm Habilidades.",
		'es-mx': "Los Pokémon {C} en juego (tanto tuyos como de tu rival) no tienen ninguna Habilidad."
	},

	trainerType: "Stadium",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826054,
				tcgplayer: 632980
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826054,
				tcgplayer: 632980
			}
		},
	],
}

export default card
