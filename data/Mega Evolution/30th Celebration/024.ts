import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "danciao",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Volt Tackle",
			fr: "Électacle",
			de: "Volttackle",
			es: "Placaje Eléctrico",
			it: "Locomovolt",
			'es-mx': "Tacleada de Voltios"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo."
		},

		damage: 80,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card