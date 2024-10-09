import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Salandit",
		fr: "Tritox",
		es: "Salandit",
		it: "Salandit",
		pt: "Salandit",
		de: "Molunk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
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
			pt: "Descarte uma Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card