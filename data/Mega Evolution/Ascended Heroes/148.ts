import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Kingambit",
		fr: "Scalpereur",
		es: "Kingambit",
		'es-mx': "Kingambit",
		de: "Gladimperio",
		it: "Kingambit",
		pt: "Kingambit"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],
	stage: "Stage2",
	dexId: [983],

	abilities: [{
		type: "Ability",

		name: {
			en: "Supreme Overlord",
			fr: "Général Suprême",
			es: "General Supremo",
			'es-mx': "General Supremo",
			de: "Feldherr",
			it: "Generale Supremo",
			pt: "General Supremo"
		},

		effect: {
			en: "Attacks used by this Pokémon do 30 more damage to your opponent's Active Pokémon for each Prize card your opponent has taken (before applying Weakness and Resistance).",
			fr: "Les attaques utilisées par ce Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire pour chaque carte Récompense que votre adversaire a récupérée (avant application de la Faiblesse et de la Résistance).",
			es: "Los ataques usados por este Pokémon hacen 30 puntos de daño más al Pokémon Activo de tu rival por cada carta de Premio que haya cogido tu rival (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Los ataques usados por este Pokémon hacen 30 puntos de daño más al Pokémon Activo de tu rival por cada carta de Premio que haya tomado tu rival (antes de aplicar Debilidad y Resistencia).",
			de: "Die von diesem Pokémon eingesetzten Attacken fügen dem Aktiven Pokémon deines Gegners für jede von deinem Gegner genommene Preiskarte 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Gli attacchi usati da questo Pokémon infliggono 30 danni in più al Pokémon attivo del tuo avversario per ogni carta Premio che ha preso, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques usados por este Pokémon causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente para cada carta de Prêmio que seu oponente pegou (antes de aplicar Fraqueza e Resistência)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal"],

		name: {
			en: "Double-Edged Slash",
			fr: "Double Tranchant",
			es: "Cuchillada Doble Filo",
			'es-mx': "Cuchillada de Doble Filo",
			de: "Zweischneidiger Schlitzer",
			it: "Doppio Taglio",
			pt: "Talho de Dois Gumes"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo."
		},

		damage: 180
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675960,
		cardmarket: 869759
	}
}

export default card