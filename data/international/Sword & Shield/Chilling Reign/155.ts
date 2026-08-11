import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Gants Désherbants",
		'en-us': "Weeding Gloves",
		'es-es': "Guantes de Jardinería",
		'it-it': "Guanti da Giardinaggio",
		'pt-br': "Luvas de Jardinagem",
		'de-de': "Unkrauthandschuhe"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Les attaques du Pokémon auquel cette carte est attachée infligent 30 dégâts supplémentaires au Pokémon Grass Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		'en-us': "The attacks of the Pokémon this card is attached to do 30 more damage to your opponent's Active Grass Pokémon (before applying Weakness and Resistance).",
		'es-es': "Los ataques del Pokémon al que esté unida esta carta hacen 30 puntos de daño más al Pokémon Grass Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Gli attacchi del Pokémon a cui è assegnata questa carta infliggono 30 danni in più al Pokémon attivo Grass del tuo avversario, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Os ataques do Pokémon ao qual esta carta está ligada causam 30 pontos de dano a mais ao Pokémon Grass Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		'de-de': "Die Attacken des Pokémon, an das diese Karte angelegt ist, fügen dem Aktiven Grass-Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Tool",
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567263,
				tcgplayer: 241865
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567263,
				tcgplayer: 241865
			}
		},
	],
}

export default card
