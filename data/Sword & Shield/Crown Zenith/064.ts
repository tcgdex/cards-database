import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Lele",
		fr: "Tokopiyon",
		es: "Tapu Lele",
		it: "Tapu Lele",
		pt: "Tapu Lele",
		de: "Kapu-Fala"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Energy Burst",
			fr: "Explosion d'Énergie",
			es: "Explosión de Energía",
			it: "Energiscoppio",
			pt: "Explosão de Energia",
			de: "Energieausbruch"
		},

		effect: {
			en: "This attack does 20 damage for each Energy attached to both Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs.",
			es: "Este ataque hace 20 puntos de daño por cada Energía unida a ambos Pokémon Activos.",
			it: "Questo attacco infligge 20 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
			pt: "Este ataque causa 20 pontos de dano para cada Energia ligada a ambos os Pokémon Ativos.",
			de: "Diese Attacke fügt für jede an beide Aktive Pokémon angelegte Energie 20 Schadenspunkte zu."
		},

		damage: "20×"
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Spiral Drain",
			fr: "Spirale Épuisante",
			es: "Drenaje Espiral",
			it: "Assorbimento Spirale",
			pt: "Dreno Espiral",
			de: "Spiralsauger"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card