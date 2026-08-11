import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Seviper",
		'fr-fr': "Séviper",
		'es-es': "Seviper",
		'es-mx': "Seviper",
		'de-de': "Vipitis",
		'it-it': "Seviper",
		'pt-br': "Seviper"
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [336],
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Excited Power",
			'fr-fr': "Puissance Dynamique",
			'es-es': "Impulso Poderoso",
			'es-mx': "Poder Vibrante",
			'de-de': "Begeisterte Kraft",
			'it-it': "Fervorpotere",
			'pt-br': "Poderio Animado"
		},

		effect: {
			'en-us': "If you have any {D} Mega Evolution Pokémon ex in play, attacks used by this Pokémon do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Si vous avez au moins un Pokémon-ex Méga-Évolution {D} en jeu, les attaques utilisées par ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Si tienes algún Pokémon ex Megaevolución {D} en juego, los ataques usados por este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Si tienes algún Pokémon ex Megaevolución {D} en juego, los ataques usados por este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'de-de': "Wenn du mindestens 1 {D}-Mega-Entwicklungs-Pokémon-ex im Spiel hast, fügen die von diesem Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners 120 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			'it-it': "Se hai dei Pokémon-ex Megaevoluzione {D} in gioco, gli attacchi usati da questo Pokémon infliggono 120 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Se você tiver algum Pokémon ex de Megaevolução {D} em jogo, os ataques usados por este Pokémon causarão 120 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência)."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			'en-us': "Pitch-Black Fangs",
			'fr-fr': "Crocs Nuit Noire",
			'es-es': "Colmillos Azabaches",
			'es-mx': "Colmillos Umbríos",
			'de-de': "Pechschwarze Fänge",
			'it-it': "Zanne Buiopesto",
			'pt-br': "Presas do Breu"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "It sharpens its swordlike tail on hard rocks. It hides in tall grass and strikes unwary prey with venomous fangs.",
	},

	illustrator: "hncl",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857637,
				tcgplayer: 660413,
				cardtrader: 356846
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857637,
				tcgplayer: 660413,
				cardtrader: 356846
			}
		},
	],
}

export default card
