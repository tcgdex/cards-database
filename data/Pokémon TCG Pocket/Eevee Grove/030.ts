import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Swoobat"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Woobat"
	},

	description: {
		en: "Emitting powerful sound waves tires it out.\nAfterward, it won't be able to fly for a\nlittle while."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Psyshot"
		},

		damage: 40,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card