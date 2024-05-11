import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Beldum",
		fr: "Terhal",
		es: "Beldum",
		it: "Beldum",
		pt: "Beldum",
		de: "Tanhel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Dig Claws",
			fr: "Creusogriffes",
			es: "Hundir Garras",
			it: "Scavazanne",
			pt: "Fincar Garras",
			de: "Schaufelkrallen"
		},

		damage: 10
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Iron Tackle",
			fr: "Charge de Fer",
			es: "Bloqueo de Hierro",
			it: "Azione Ferrea",
			pt: "Golpe de Colisão Férreo",
			de: "Eisentackle"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card