import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Watchtower",
		'fr-fr': "Tour d'Observation de la Team Rocket",
		'es-es': "Torre de Defensa del Team Rocket",
		'es-mx': "Torre de Vigilancia del Equipo Rocket",
		'de-de': "Team Rockets Wachturm",
		'it-it': "Torre di Guardia del Team Rocket",
		'pt-br': "Torre de Vigia da Equipe Rocket"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "{C} Pokémon in play (both yours and your opponent's) have no Abilities.",
		'fr-fr': "Les Pokémon {C} en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
		'es-es': "Los Pokémon {C} en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
		'es-mx': "Los Pokémon {C} en juego (tanto tuyos como de tu rival) no tienen ninguna Habilidad.",
		'de-de': "{C}-Pokémon im Spiel (deine und die deines Gegners) haben keine Fähigkeiten.",
		'it-it': "I Pokémon {C} in gioco, sia tuoi che del tuo avversario, non hanno abilità.",
		'pt-br': "Pokémon {C} em jogo (seus e do seu oponente) não têm Habilidades."
	},

	trainerType: "Stadium",
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869821,
			tcgplayer: 676022
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869821,
			tcgplayer: 676022
		}
	}
],
}

export default card