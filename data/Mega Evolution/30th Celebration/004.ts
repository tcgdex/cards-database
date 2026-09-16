import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Illumise",
		fr: "Lumivole",
		de: "Illumise",
		es: "Illumise",
		it: "Illumise",
		'es-mx': "Illumise"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Supereffective Pheromones",
			fr: "Phéromones Super Efficaces",
			de: "Sehr effektive Pheromone",
			es: "Feromonas Supereficaces",
			it: "Feromoni Superefficaci",
			'es-mx': "Feromonas Supereficaces"
		},

		effect: {
			en: "If you have Volbeat in play, apply Weakness for both Active Pokémon as ×3.",
			fr: "Si vous avez Muciole en jeu, la Faiblesse des deux Pokémon Actifs est de ×3.",
			de: "Wenn du Volbeat im Spiel hast, verrechne Schwäche bei beiden Aktiven Pokémon als ×3.",
			es: "Si tienes a Volbeat en juego, aplica una Debilidad de × 3 a ambos Pokémon Activos.",
			it: "Se hai Volbeat in gioco, la debolezza di entrambi i Pokémon attivi è ×3.",
			'es-mx': "Si tienes Volbeat en juego, aplica Debilidad de × 3 a ambos Pokémon Activos."
		}
	}],

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			es: "Apisonar",
			it: "Carica",
			'es-mx': "Colisión"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card