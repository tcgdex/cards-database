import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
		'es-es': "Salandit",
		'es-mx': "Salandit",
		'de-de': "Molunk",
		'it-it': "Salandit",
		'pt-br': "Salandit"
	},

	illustrator: "Felicia Chen",
	rarity: "Common",
	category: "Pokemon",
	dexId: [757],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Ember",
			'fr-fr': "Flammèche",
			'es-es': "Ascuas",
			'es-mx': "Brasas",
			'de-de': "Glut",
			'it-it': "Braciere",
			'pt-br': "Brasa"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Only female Salandit can produce gas laden with pheromones. Males entranced by this gas will do whatever the females tell them.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869645,
			tcgplayer: 675846
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870192,
			tcgplayer: 676880
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870191,
			tcgplayer: 677020
		}
	},
],
}

export default card
