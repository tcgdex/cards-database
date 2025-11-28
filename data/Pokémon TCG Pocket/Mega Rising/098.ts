import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Xatu"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [178],
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Natu"
	},

	description: {
		en: "This odd Pokémon can see both the past and\nthe future. It eyes the sun's movement all day."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Zen Headbutt"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card