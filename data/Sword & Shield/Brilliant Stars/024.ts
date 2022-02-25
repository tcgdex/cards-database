import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Chimchar",
		fr: "Ouisticram",
		es: "Chimchar",
		it: "Chimchar",
		pt: "Chimchar",
		de: "Panflam"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Ember",
			fr: "Flammèche",
			es: "Ascuas",
			it: "Braciere",
			pt: "Brasa",
			de: "Glut"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte 1 Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card