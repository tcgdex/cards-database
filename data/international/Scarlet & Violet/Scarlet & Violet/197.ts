import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Vitality Band",
		'fr-fr': "Bandeau Vitalité",
		'es-es': "Cinta Vitalidad",
		'it-it': "Bendavitale",
		'pt-br': "Faixa de Vitalidade",
		'de-de': "Vitalitätsband"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "The attacks of the Pokémon this card is attached to do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
		'fr-fr': "Les attaques du Pokémon auquel cette carte est attachée infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		'es-es': "Los ataques del Pokémon al que esté unida esta carta hacen 10 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Gli attacchi del Pokémon a cui è assegnata questa carta infliggono 10 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Os ataques do Pokémon ao qual esta carta está ligada causam 10 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		'de-de': "Die Attacken des Pokémon, an das diese Karte angelegt ist, fügen dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Tool",
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Studio Bora Inc.",

	thirdParty: {
        cardmarket: 702493,
        tcgplayer: 488107
    }
}

export default card