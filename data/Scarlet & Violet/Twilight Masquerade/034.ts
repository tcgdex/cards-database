import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [554],
	set: Set,

	name: {
		en: "Darumaka",
		fr: "Darumarond",
		es: "Darumaka",
		it: "Darumaka",
		pt: "Darumaka",
		de: "Flampion"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Strength",
			fr: "Force",
			es: "Fuerza",
			it: "Forza",
			pt: "Força",
			de: "Stärke"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Fire Tackle",
			fr: "Charge de Feu",
			es: "Placaje Fuego",
			it: "Fuocazione",
			pt: "Investida de Fogo",
			de: "Feuertackle"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card