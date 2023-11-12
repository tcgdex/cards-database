import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Marill",
		en: "Marill",
		es: "Marill",
		it: "Marill",
		pt: "Marill",
		de: "Marill"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			fr: "Vide Bulle",
			en: "Bubble Drain",
			es: "Drenaje Burbujas",
			it: "Assorbibolla",
			pt: "Dreno de Bolha",
			de: "Blasengully"
		},

		effect: {
			fr: "Soignez 20 dégâts de ce Pokémon.",
			en: "Heal 20 damage from this Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano deste Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card