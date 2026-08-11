import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Brave Bangle",
		'fr-fr': "Bracelet Vaillant",
		'de-de': "Reif der Tapferkeit",
		'it-it': "Braccialcoraggio",
		'pt-br': "Bracelete Bravio",
		'es-es': "Pulsera Osada",
		'es-mx': "Brazalete Valiente"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "If the Pokémon this card is attached to doesn't have a Rule Box, the attacks it uses do 30 more damage to your opponent's Active Pokémon ex (before applying Weakness and Resistance). (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
		'fr-fr': "Si le Pokémon auquel cette carte est attachée n'a pas d'encadré Règle, les attaques qu'il utilise infligent 30 dégâts supplémentaires au Pokémon-ex Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). (Les Pokémon-ex, Pokémon-V, etc. ont des encadrés Règle.)",
		'de-de': "Wenn das Pokémon, an das diese Karte angelegt ist, kein Regelfeld hat, fügen die Attacken, die es einsetzt, dem Aktiven Pokémon-ex deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden). (Pokémon-ex, Pokémon-V usw. haben Regelfelder.)",
		'it-it': "Se il Pokémon a cui è assegnata questa carta non ha una regola speciale, gli attacchi che usa infliggono 30 danni in più al Pokémon-ex attivo del tuo avversario, prima di aver applicato debolezza e resistenza. I Pokémon-ex, i Pokémon-V, ecc. hanno regole speciali.",
		'pt-br': "Se o Pokémon ao qual esta carta está ligada não tiver uma Caixa de Regras, os ataques que ele usar causarão 30 pontos de dano a mais ao Pokémon ex Ativo do seu oponente (antes de aplicar Fraqueza e Resistência). (Pokémon ex, Pokémon V, etc. têm Caixas de Regras.)",
		'es-es': "Si el Pokémon al que está unida esta carta no tiene un recuadro de regla, los ataques que use hacen 30 puntos de daño más al Pokémon ex Activo de tu rival (antes de aplicar Debilidad y Resistencia). (Pokémon ex, Pokémon V, etc. tienen recuadros de regla).",
		'es-mx': "Si el Pokémon al que está unida esta carta no tiene un recuadro de regla, los ataques que use hacen 30 puntos de daño más al Pokémon ex Activo de tu rival (antes de aplicar Debilidad y Resistencia). (Los Pokémon ex, los Pokémon V, etc., tienen recuadros de regla)."
	},

	trainerType: "Tool",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836051,
				tcgplayer: 642197
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836051,
				tcgplayer: 642197
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836641,
				tcgplayer: 642434
			}
		},
	],
}

export default card
