import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [305],
	set: Set,

	name: {
		en: "Lairon",
		fr: "Galegon",
		es: "Lairon",
		it: "Lairon",
		pt: "Lairon",
		de: "Stollrak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Steel Tackle",
			fr: "Charge d'Acier",
			es: "Placaje de Acero",
			it: "Ferrazione",
			pt: "Colisão de Aço",
			de: "Stahltackle"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 40
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
			es: "Garra Metal",
			it: "Ferrartigli",
			pt: "Garra de Metal",
			de: "Metallklaue"
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Aron",
		fr: "Galekid",
		es: "Aron",
		it: "Aron",
		pt: "Aron",
		de: "Stollunior"
	}
}

export default card