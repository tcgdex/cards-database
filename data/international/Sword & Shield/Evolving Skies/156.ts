import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Rubber Gloves",
		'fr-fr': "Gants de Caoutchouc",
		'es-es': "Guantes de Goma",
		'it-it': "Guanti di Gomma",
		'pt-br': "Luvas de Borracha",
		'de-de': "Gummihandschuhe"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "The attacks of the Pokémon this card is attached to do 30 more damage to your opponent's Active Lightning Pokémon (before applying Weakness and Resistance).",
		'fr-fr': "Les attaques du Pokémon auquel cette carte est attachée infligent 30 dégâts supplémentaires au Pokémon Lightning Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		'es-es': "Los ataques del Pokémon al que esté unida esta carta hacen 30 puntos de daño más al Pokémon Lightning Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Gli attacchi del Pokémon a cui è assegnata questa carta infliggono 30 danni in più al Pokémon attivo Lightning del tuo avversario, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Os ataques do Pokémon ao qual esta carta está ligada causam 30 pontos de dano a mais ao Pokémon Lightning Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		'de-de': "Die Attacken des Pokémon, an das diese Karte angelegt ist, fügen dem Aktiven Lightning-Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Tool",
	illustrator: "Toyste Beach",
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574214,
				tcgplayer: 246782
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574214,
				tcgplayer: 246782
			}
		},
	],
}

export default card
