import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Binding Mochi",
		'fr-fr': "Mochi de Servitude",
		'es-es': "Mochi Cadena",
		'it-it': "Mochi Soggiogante",
		'pt-br': "Moti Vinculante",
		'de-de': "Ketten-Mochi"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Attacks used by the Poisoned Pokémon this card is attached to do 40 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
		'fr-fr': "Les attaques utilisées par le Pokémon Empoisonné auquel cette carte est attachée infligent 40 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		'es-es': "Los ataques usados por el Pokémon Envenenado al que esté unida esta carta hacen 40 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Gli attacchi usati dal Pokémon avvelenato a cui è assegnata questa carta infliggono 40 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Os ataques usados pelo Pokémon Envenenado ao qual esta carta está ligada causam 40 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		'de-de': "Die eingesetzten Attacken von dem vergifteten Pokémon, an das diese Karte angelegt ist, fügen dem Aktiven Pokémon deines Gegners 40 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Tool",
	regulationMark: "H",


	illustrator: "5ban Graphics",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780951,
				tcgplayer: 560366
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780951,
				tcgplayer: 560366
			}
		},
	],
}

export default card
