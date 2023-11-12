import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Olivado",
		en: "Dolliv",
		es: "Dolliv",
		it: "Dolliv",
		pt: "Dolliv",
		de: "Olivinio"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Vent Ensoleillé",
			en: "Sunny Wind",
			es: "Viento Soleado",
			it: "Vento Solare",
			pt: "Vento Ensolarado",
			de: "Sonnige Brise"
		},

		effect: {
			fr: "Soignez 30 dégâts de ce Pokémon.",
			en: "Heal 30 damage from this Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card