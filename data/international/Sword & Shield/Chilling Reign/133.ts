import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Gants Dévastateurs",
		'en-us': "Crushing Gloves",
		'es-es': "Guantes Demoledores",
		'it-it': "Guanti Spaccatutto",
		'pt-br': "Luvas Esmagadoras",
		'de-de': "Schmetterhandschuhe"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Les attaques du Pokémon auquel cette carte est attachée infligent 30 dégâts supplémentaires au Pokémon Metal Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		'en-us': "The attacks of the Pokémon this card is attached to do 30 more damage to your opponent's Active Metal Pokémon (before applying Weakness and Resistance).",
		'es-es': "Los ataques del Pokémon al que esté unida esta carta hacen 30 puntos de daño más al Pokémon Metal Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Gli attacchi del Pokémon a cui è assegnata questa carta infliggono 30 danni in più al Pokémon attivo Metal del tuo avversario, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Os ataques do Pokémon ao qual esta carta está ligada causam 30 pontos de dano a mais ao Pokémon Metal Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		'de-de': "Die Attacken des Pokémon, an das diese Karte angelegt ist, fügen dem Aktiven Metal-Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Tool",
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567241,
				tcgplayer: 241823
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567241,
				tcgplayer: 241823
			}
		},
	],
}

export default card
