import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [107],
	set: Set,

	name: {
		fr: "Tygnon",
		en: "Hitmonchan",
		es: "Hitmonchan",
		it: "Hitmonchan",
		pt: "Hitmonchan",
		de: "Nockchan"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Contre-Attaque",
			en: "Counterattack",
			es: "Contragolpe",
			it: "Respinta",
			pt: "Contra-ataque",
			de: "Gegenangriff"
		},

		effect: {
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti tre segnalini danno sul Pokémon attaccante.",
			pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 3 contadores de dano no Pokémon Atacante.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 3 Schadensmarken auf das Angreifende Pokémon."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			fr: "Coup de Poing Dynamique",
			en: "Excited Punch",
			es: "Puño Exaltado",
			it: "Fervorpugno",
			pt: "Soco Animado",
			de: "Aufgeregter Punch"
		},

		effect: {
			fr: "Pendant votre prochain tour, l'attaque Coup de Poing Dynamique de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			en: "During your next turn, this Pokémon's Excited Punch attack does 60 more damage (before applying Weakness and Resistance).",
			es: "Durante tu próximo turno, el ataque Puño Exaltado de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il tuo prossimo turno, l'attacco Fervorpugno di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, o ataque Soco Animado deste Pokémon causará 60 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			de: "Während deines nächsten Zuges fügt die Attacke Aufgeregter Punch dieses Pokémon 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card