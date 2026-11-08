import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Digging Gloves",
		'fr-fr': "Gants Excavateurs",
		'es-es': "Guantes de Excavación",
		'it-it': "Guanti da Scavo",
		'pt-br': "Luvas de Escavação",
		'de-de': "Buddelhandschuhe"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "The attacks of the Pokémon this card is attached to do 30 more damage to your opponent's Active Fighting Pokémon (before applying Weakness and Resistance).",
		'fr-fr': "Les attaques du Pokémon auquel cette carte est attachée infligent 30 dégâts supplémentaires au Pokémon Fighting Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		'es-es': "Los ataques del Pokémon al que esté unida esta carta hacen 30 puntos de daño más al Pokémon Fighting Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Gli attacchi del Pokémon a cui è assegnata questa carta infliggono 30 danni in più al Pokémon attivo Fighting del tuo avversario, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Os ataques do Pokémon ao qual esta carta está ligada causam 30 pontos de dano a mais ao Pokémon Fighting Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		'de-de': "Die Attacken des Pokémon, an das diese Karte angelegt ist, fügen dem Aktiven Fighting-Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Tool",
	illustrator: "Toyste Beach",
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574203,
				tcgplayer: 246770
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574203,
				tcgplayer: 246770
			}
		},
	],
}

export default card
