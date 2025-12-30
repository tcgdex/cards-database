import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Drednaw"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [834],
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		en: "Chewtle"
	},

	description: {
		en: "Drednaw lurks along the shoreline. When prey\ncome to drink water, Drednaw stretches its neck\nout and chomps down on them."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Jaw Lock"
		},

		damage: 70,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card