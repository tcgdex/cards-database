import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hop's Choice Band",
		'fr-fr': "Bandeau Choix de Nabil",
		'es-es': "Cinta Elección de Paul",
		'de-de': "Hops Wahlband",
		'it-it': "Bendascelta di Hop",
		'pt-br': "Faixa da Escolha do Lupo",
		'es-mx': "Cinta Elección de Paul"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Attacks used by the Hop's Pokémon this card is attached to cost {C} less and do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
		'fr-fr': "Les attaques utilisées par le Pokémon de Nabil auquel cette carte est attachée coûtent {C} de moins et infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		'es-es': "Los ataques usados por el Pokémon de Paul al que esté unida esta carta cuestan {C} menos y hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		'de-de': "Die Kosten der eingesetzten Attacken von dem Hops Pokémon, an das diese Karte angelegt ist, verringern sich um {C}, und die Attacken fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
		'it-it': "Gli attacchi usati dal Pokémon di Hop a cui è assegnata questa carta costano {C} in meno e infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Os ataques usados pelo Pokémon do Lupo ao qual esta carta está ligada custam {C} a menos e causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		'es-mx': "Los ataques usados por el Pokémon de Paul al que esté unida esta carta cuestan Colorless menos y hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia)."
	},

	trainerType: "Tool",
	regulationMark: "I",
	illustrator: "Toyste Beach",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817300,
				tcgplayer: 623575
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817300,
				tcgplayer: 623575
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
