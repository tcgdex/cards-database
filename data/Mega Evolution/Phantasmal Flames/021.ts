import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Seel",
		fr: "Otaria",
		es: "Seel",
		'es-mx': "Seel",
		de: "Jurob",
		it: "Seel",
		pt: "Seel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Bubble Drain",
			fr: "Vide Bulle",
			es: "Drenaje Burbujas",
			'es-mx': "Drenado Burbujeante",
			de: "Blasengully",
			it: "Assorbibolla",
			pt: "Dreno de Bolha"
		},

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			'es-mx': "Cura 20 puntos de daño a este Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano deste Pokémon."
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card