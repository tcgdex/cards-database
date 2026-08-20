import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Galvantula",
		fr: "Mygavolt"
	},

	illustrator: "Yumi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [596],
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		en: "Joltik",
		fr: "Statitik"
	},

	description: {
		en: "It lays traps of electrified threads near the nests\nof bird Pokémon, aiming to snare chicks that are\nnot yet good at flying."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Electro Ball",
			fr: "Boule Élek"
		},

		damage: 50,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card