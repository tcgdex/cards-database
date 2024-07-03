import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [598],
	set: Set,

	name: {
		en: "Ferrothorn",
		fr: "Noacier",
		es: "Ferrothorn",
		it: "Ferrothorn",
		pt: "Ferrothorn",
		de: "Tentantel"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Exoskeleton",
			fr: "Exosquelette",
			es: "Exosqueleto",
			it: "Esoscheletro",
			pt: "Exoesqueleto",
			de: "Exoskelett"
		},

		effect: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Spinning Needles",
			fr: "Aiguilles Tournoyantes",
			es: "Púas Giratorias",
			it: "Aghi Rotanti",
			pt: "Espinhos Giratórios",
			de: "Wirbelnadeln"
		},

		effect: {
			en: "During your next turn, this Pokémon's Spinning Needles attack does 100 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Aiguilles Tournoyantes de ce Pokémon inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			es: "Durante tu próximo turno, el ataque Púas Giratorias de este Pokémon hace 100 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il tuo prossimo turno, l'attacco Aghi Rotanti di questo Pokémon infligge 100 danni in più, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, o ataque Espinhos Giratórios deste Pokémon causará 100 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			de: "Während deines nächsten Zuges fügt die Attacke Wirbelnadeln dieses Pokémon 100 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 50
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card