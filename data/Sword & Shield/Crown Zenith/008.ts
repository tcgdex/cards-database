import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Yanma",
		fr: "Yanma",
		es: "Yanma",
		it: "Yanma",
		pt: "Yanma",
		de: "Yanma"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Swoop Across",
			fr: "Déferlement Aérien",
			es: "Vuelo Transversal",
			it: "Volo Radente",
			pt: "Investida Cruzada",
			de: "Überflieger"
		},

		effect: {
			en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 10 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Cutting Wind",
			fr: "Vent Glacial",
			es: "Viento Helado",
			it: "Vento Tagliente",
			pt: "Vento Dilacerante",
			de: "Schneidender Wind"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card