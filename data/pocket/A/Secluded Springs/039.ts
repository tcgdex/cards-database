import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jellicent",
		'fr-fr': "Moyade"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [593],
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Frillish"
	},

	description: {
		'en-us': "Most of this Pokémon's body composition is\nidentical to sea water. It makes sunken ships\nits lair.",
		'fr-fr': "Son corps est composé presque entièrement d'une substance identique à l'eau de mer. Les épaves de navires sont ses bastions."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Devour Soul",
			'fr-fr': "Dévoreur d'Âmes"
		},

		damage: 80,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card