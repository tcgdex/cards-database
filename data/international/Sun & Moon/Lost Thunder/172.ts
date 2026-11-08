import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Electropower",
		'fr-fr': "Électropuissance",
		'es-es': "Electropoder",
		'it-it': "Potenziatore Elettrico",
		'pt-br': "Eletropoder",
		'de-de': "Elektrokraft"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Pendant ce tour, les attaques de vos Pokémon Lightning infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		'en-us': "During this turn, your Lightning Pokémon’s attacks do 30 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
		'es-es': "Durante este turno, los ataques de tus Pokémon Lightning hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Durante questo turno, gli attacchi dei tuoi Pokémon Lightning infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Durante esta rodada, os ataques dos seus Pokémon Lightning causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		'de-de': "Während dieses Zuges fügen die Attacken deiner Lightning-Pokémon dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 365808,
		tcgplayer: 178999
	}
}

export default card
