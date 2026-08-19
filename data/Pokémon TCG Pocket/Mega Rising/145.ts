import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Rolycoly",
		fr: "Charbi"
	},

	illustrator: "Misa Tsutsui",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [837],
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "Chunks of the surface of this Pokémon's body\nthat have grown old and flaked off have long\nbeen used for fuel as an alternative to coal."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card