import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Charmander",
		fr: "Salamèche",
		de: "Glumanda",
		it: "Charmander",
		es: "Charmander",
		pt: "Charmander",
		'es-mx': "Charmander"
	},

	illustrator: "Saboteri",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	dexId: [4],

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Ember",
			fr: "Flammèche",
			de: "Glut",
			it: "Braciere",
			es: "Ascuas",
			pt: "Brasa",
			'es-mx': "Ascuas"
		},

		damage: 30,

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		}
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		cardmarket: 875187
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
