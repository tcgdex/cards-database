import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Iris",
		'fr-fr': "Iris",
		'es-es': "Iris",
		'it-it': "Iris",
		'pt-br': "Iris",
		'de-de': "Lilia"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Pendant ce tour, les attaques de vos Pokémon infligent 10 dégâts supplémentaires aux Pokémon Actifs pour chaque carte Récompense que votre adversaire a récupérée (avant application de la Faiblesse et de la Résistance).",
		'en-us': "During this turn, your Pokémon’s attacks do 10 more damage to the Active Pokémon for each Prize card your opponent has taken (before applying Weakness and Resistance).",
		'es-es': "Durante este turno, los ataques de tus Pokémon hacen 10 puntos de daño más a los Pokémon Activos por cada carta de Premio que haya tomado tu rival (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Durante questo turno, gli attacchi dei tuoi Pokémon infliggono 10 danni in più ai Pokémon attivi per ogni carta Premio presa dal tuo avversario, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Durante este turno, os ataques dos seus Pokémon causam 10 de danos adicionais ao Pokémon Ativo para cada card de Prêmio que seu oponente tiver obtido (antes da aplicação de Fraqueza e Resistência).",
		'de-de': "Während dieses Zuges fügen alle Angriffe deiner Pokémon den Aktiven Pokémon 10 weitere Schadenspunkte für jede Preiskarte zu, die dein Gegner bereits genommen hat (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 281102,
		tcgplayer: 86288
	}
}

export default card
