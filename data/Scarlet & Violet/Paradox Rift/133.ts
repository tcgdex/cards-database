import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [680],
	set: Set,

	name: {
		en: "Doublade",
		fr: "Dimoclès",
		es: "Doublade",
		it: "Doublade",
		pt: "Doublade",
		de: "Duokles"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Swords Dance",
			fr: "Danse Lames",
			es: "Danza Espada",
			it: "Danzaspada",
			pt: "Dança das Espadas",
			de: "Schwerttanz"
		},

		effect: {
			en: "During your next turn, this Pokémon's Slicing Blade attack does 80 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Lame Tranchante de ce Pokémon inflige 80 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			es: "Durante tu próximo turno, el ataque Cuchilla Cortante de este Pokémon hace 80 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il tuo prossimo turno, l'attacco Affettalama di questo Pokémon infligge 80 danni in più, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, o ataque Lâmina Fatiante deste Pokémon causará 80 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			de: "Während deines nächsten Zuges fügt die Attacke Schwertschneide dieses Pokémon 80 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}, {
		cost: ["Metal", "Metal"],

		name: {
			en: "Slicing Blade",
			fr: "Lame Tranchante",
			es: "Cuchilla Cortante",
			it: "Affettalama",
			pt: "Lâmina Fatiante",
			de: "Schwertschneide"
		},

		damage: 40
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card