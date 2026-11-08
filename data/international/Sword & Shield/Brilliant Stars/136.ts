import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cleansing Gloves",
		'fr-fr': "Gants Purifiants",
		'es-es': "Guantes Purificadores",
		'it-it': "Guanti di Purificazione",
		'pt-br': "Luvas de Purificação",
		'de-de': "Reinigende Handschuhe"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "The attacks of the Pokémon this card is attached to do 30 more damage to your opponent's Active Psychic Pokémon (before applying Weakness and Resistance).",
		'fr-fr': "Les attaques du Pokémon auquel cette carte est attachée infligent 30 dégâts supplémentaires au Pokémon Psychic Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		'es-es': "Los ataques del Pokémon al que esté unida esta carta hacen 30 puntos de daño más al Pokémon Psychic Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Gli attacchi del Pokémon a cui è assegnata questa carta infliggono 30 danni in più al Pokémon attivo Psychic del tuo avversario, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Os ataques do Pokémon ao qual esta carta está ligada causam 30 pontos de dano a mais ao Pokémon Psychic Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		'de-de': "Die Attacken des Pokémon, an das diese Karte angelegt ist, fügen dem Aktiven Psychic-Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Tool",
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608682,
				tcgplayer: 263858
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608682,
				tcgplayer: 263858
			}
		},
	],
}

export default card
