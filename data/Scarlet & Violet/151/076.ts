import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [76],
	set: Set,

	name: {
		fr: "Grolem-ex",
		en: "Golem ex",
		es: "Golem ex",
		it: "Golem-ex",
		pt: "Golem ex",
		de: "Geowaz-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Roulé Dynamique",
			en: "Dynamic Roll",
			es: "Giro Dinámico",
			it: "Rotolamento Dinamico",
			pt: "Rolagem Dinâmica",
			de: "Dynamische Rolle"
		},

		effect: {
			fr: "Pendant votre prochain tour, les attaques utilisées par ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			en: "During your next turn, attacks used by this Pokémon do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			es: "Durante tu próximo turno, los ataques usados por este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il tuo prossimo turno, gli attacchi usati da questo Pokémon infliggono 120 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, os ataques usados por este Pokémon causarão 120 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			de: "Während deines nächsten Zuges fügen die von diesem Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners 120 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 50
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Explose-Rochers",
			en: "Rock Blaster",
			es: "Explosión Roca",
			it: "Esplodiroccia",
			pt: "Detonador de Pedra",
			de: "Gesteinsblaster"
		},

		effect: {
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			en: "This attack's damage isn't affected by Resistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 180
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Uta",

	thirdParty: {
		cardmarket: 733671
	}
}

export default card