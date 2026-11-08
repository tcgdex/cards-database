import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Postwick",
		'fr-fr': "Paddoxton",
		'es-es': "Pueblo Yarda",
		'de-de': "Furlongham",
		'it-it': "Furlongham",
		'pt-br': "Postwick",
		'es-mx': "Pueblo Yarda"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Attacks used by Hop's Pokémon (both yours and your opponent's) do 30 more damage to the opponent's Active Pokémon (before applying Weakness and Resistance).",
		'fr-fr': "Les attaques utilisées par les Pokémon de Nabil (les vôtres et ceux de votre adversaire) infligent 30 dégâts supplémentaires au Pokémon Actif de l'adversaire (avant application de la Faiblesse et de la Résistance).",
		'es-es': "Los ataques usados por los Pokémon de Paul (tanto tuyos como de tu rival) hacen 30 puntos de daño más al Pokémon Activo del rival (antes de aplicar Debilidad y Resistencia).",
		'de-de': "Die von Hops Pokémon eingesetzten Attacken (deine und die deines Gegners) fügen dem Aktiven Pokémon des Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
		'it-it': "Gli attacchi usati dai Pokémon di Hop, sia tuoi che del tuo avversario, infliggono 30 danni in più al Pokémon attivo dell'avversario, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Os ataques usados pelos Pokémon do Lupo (seus e do seu oponente) causam 30 pontos de dano a mais ao Pokémon Ativo do oponente (antes de aplicar Fraqueza e Resistência).",
		'es-mx': "Los ataques usados por los Pokémon de Paul (tanto tuyos como de tu rival) hacen 30 puntos de daño más al Pokémon Activo del rival (antes de aplicar Debilidad y Resistencia)."
	},

	trainerType: "Stadium",
	regulationMark: "I",
	illustrator: "AYUMI ODASHIMA",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817306,
				tcgplayer: 623581
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817306,
				tcgplayer: 623581
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			stamp: ['player-rewards-program']
		}
	],
}

export default card
