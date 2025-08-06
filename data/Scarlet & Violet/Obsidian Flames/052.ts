import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [537],
	set: Set,

	name: {
		fr: "Crapustule",
		en: "Seismitoad",
		es: "Seismitoad",
		it: "Seismitoad",
		pt: "Seismitoad",
		de: "Branawarz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Zone Sismique",
			en: "Quaking Zone",
			es: "Zona Sísmica",
			it: "Area Tellurica",
			pt: "Zona de Tremor",
			de: "Bebenzone"
		},

		effect: {
			fr: "Tant que ce Pokémon est sur le Poste Actif, les attaques utilisées par le Pokémon Actif de votre adversaire coûtent {C} de plus.",
			en: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon cost {C} more.",
			es: "Mientras este Pokémon esté en el Puesto Activo, los ataques usados por el Pokémon Activo de tu rival cuestan {C} más.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il costo degli attacchi usati dal Pokémon attivo del tuo avversario aumenta di {C}.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, os ataques usados pelo Pokémon Ativo do seu oponente custarão {C} a mais.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, erhöhen sich die Kosten der vom Aktiven Pokémon deines Gegners eingesetzten Attacken um {C}."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			fr: "Écho",
			en: "Echoed Voice",
			es: "Eco Voz",
			it: "Echeggiavoce",
			pt: "Voz Ecoante",
			de: "Widerhall"
		},

		effect: {
			fr: "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			en: "During your next turn, this Pokémon's Echoed Voice attack does 100 more damage (before applying Weakness and Resistance).",
			es: "Durante tu próximo turno, el ataque Eco Voz de este Pokémon hace 100 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il tuo prossimo turno, l'attacco Echeggiavoce di questo Pokémon infligge 100 danni in più, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, o ataque Voz Ecoante deste Pokémon causará 100 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			de: "Während deines nächsten Zuges fügt die Attacke Widerhall dieses Pokémon 100 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Misa Tsutsui",

	thirdParty: {
		cardmarket: 725132
	}
}

export default card