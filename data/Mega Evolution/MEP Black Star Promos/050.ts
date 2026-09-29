import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Tepig",
		fr: "Gruikui",
		es: "Tepig",
		'es-mx': "Tepig",
		de: "Floink",
		it: "Tepig",
		pt: "Tepig"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	dexId: [498],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Ember",
			fr: "Flammèche",
			de: "Glut",
			it: "Braciere",
			es: "Ascuas",
			pt: "Brasa",
			'es-mx': "Ascuas"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		},

		damage: 40
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 886619,
				tcgplayer: 699874
			}
		},
	],
}

export default card
