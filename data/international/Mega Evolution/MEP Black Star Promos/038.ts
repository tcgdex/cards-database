import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'de-de': "Glumanda",
		'it-it': "Charmander",
		'es-es': "Charmander",
		'pt-br': "Charmander",
		'es-mx': "Charmander"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	dexId: [4],

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Ember",
			'fr-fr': "Flammèche",
			'de-de': "Glut",
			'it-it': "Braciere",
			'es-es': "Ascuas",
			'pt-br': "Brasa",
			'es-mx': "Ascuas"
		},

		damage: 30,

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		}
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
				cardmarket: 875187,
				tcgplayer: 684462
			}
		},
	],
}

export default card
