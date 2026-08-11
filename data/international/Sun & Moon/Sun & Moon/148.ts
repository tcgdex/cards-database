import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Professor Kukui",
		'fr-fr': "Prof. Euphorbe",
		'es-es': "Profesor Kukui",
		'it-it': "Professor Kukui",
		'pt-br': "Professor Nogueira",
		'de-de': "Prof. Kukui"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez 2 cartes. Pendant ce tour, les attaques de vos Pokémon infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		'en-us': "Draw 2 cards. During this turn, your Pokémon’s attacks do 20 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
		'es-es': "Roba 2 cartas. Durante este turno, los ataques de tus Pokémon hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Pesca due carte. Durante questo turno, gli attacchi dei tuoi Pokémon infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Compre 2 cartas. Durante esta rodada, os ataques dos seus Pokémon causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		'de-de': "Ziehe 2 Karten. Während dieses Zuges fügen die Attacken deiner Pokémon dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 295461,
		tcgplayer: 127020
	}
}

export default card
