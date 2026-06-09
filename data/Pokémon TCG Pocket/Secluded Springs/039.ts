import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Jellicent",
		fr: "Moyade"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [593],
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Frillish"
	},

	description: {
		en: "Most of this Pokémon's body composition is\nidentical to sea water. It makes sunken ships\nits lair.",
		fr: "Son corps est composé presque entièrement d'une substance identique à l'eau de mer. Les épaves de navires sont ses bastions."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Devour Soul",
			fr: "Dévoreur d'Âmes"
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