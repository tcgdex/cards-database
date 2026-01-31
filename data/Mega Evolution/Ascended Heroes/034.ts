import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Salandit",
		fr: "Tritox",
		es: "Salandit",
		'es-mx': "Salandit",
		de: "Molunk",
		it: "Salandit",
		pt: "Salandit"
	},

	illustrator: "Felicia Chen",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [757],

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Ember",
			fr: "Flammèche",
			es: "Ascuas",
			'es-mx': "Brasas",
			de: "Glut",
			it: "Braciere",
			pt: "Brasa"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675846,
		cardmarket: 869645
	}
}

export default card