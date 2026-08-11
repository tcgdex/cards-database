import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Fighting Stadium",
		'fr-fr': "Stade des Combats",
		'es-es': "Estadio Lucha",
		'it-it': "Stadio Lotta",
		'pt-br': "Estádio de Combate",
		'de-de': "Kampfhalle"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Les attaques de chaque Pokémon Fighting en jeu (les vôtres et ceux de votre adversaire) infligent 20 dégâts supplémentaires aux Pokémon-EX Défenseurs (avant application de la Faiblesse et de la Résistance).",
		'en-us': "The attacks of each Fighting Pokémon in play (both yours and your opponent's) do 20 more damage to the Defending Pokémon-EX (before applying Weakness and Resistance).",
		'es-es': "Los ataques de cada Pokémon Fighting en juego (tanto tuyos como de tu rival) hacen 20 puntos de daño más a los Pokémon-EX Defensores (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Gli attacchi di tutti i tuoi Pokémon Fighting in gioco, sia tuoi che del tuo avversario, infliggono 20 danni in più al Pokémon-EX difensore, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Os ataques de cada Pokémon Fighting em jogo (seus e do seu oponente) causam 20 de danos adicionais ao Pokémon -EX Defensor (antes da aplicação de Fraqueza e Resistência).",
		'de-de': "Die Angriffe jedes Fighting-Pokémon im Spiel (deiner und der deines Gegners)fügen dem Verteidigenden Pokémon-EX 20 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 281754,
		tcgplayer: 92271
	}
}

export default card
