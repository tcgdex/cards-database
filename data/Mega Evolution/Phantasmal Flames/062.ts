import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Seviper",
		fr: "Séviper",
		es: "Seviper",
		'es-mx': "Seviper",
		de: "Vipitis",
		it: "Seviper",
		pt: "Seviper"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Excited Power",
			fr: "Puissance Dynamique",
			es: "Impulso Poderoso",
			'es-mx': "Poder Vibrante",
			de: "Begeisterte Kraft",
			it: "Fervorpotere",
			pt: "Poderio Animado"
		},

		effect: {
			en: "If you have any {D} Mega Evolution Pokémon ex in play, attacks used by this Pokémon do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Si vous avez au moins un Pokémon-ex Méga-Évolution {D} en jeu, les attaques utilisées par ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Si tienes algún Pokémon ex Megaevolución {D} en juego, los ataques usados por este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Si tienes algún Pokémon ex Megaevolución {D} en juego, los ataques usados por este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			de: "Wenn du mindestens 1 {D}-Mega-Entwicklungs-Pokémon-ex im Spiel hast, fügen die von diesem Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners 120 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Se hai dei Pokémon-ex Megaevoluzione {D} in gioco, gli attacchi usati da questo Pokémon infliggono 120 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Se você tiver algum Pokémon ex de Megaevolução {D} em jogo, os ataques usados por este Pokémon causarão 120 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência)."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Pitch-Black Fangs",
			fr: "Crocs Nuit Noire",
			es: "Colmillos Azabaches",
			'es-mx': "Colmillos Umbríos",
			de: "Pechschwarze Fänge",
			it: "Zanne Buiopesto",
			pt: "Presas do Breu"
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857637
	}
}

export default card