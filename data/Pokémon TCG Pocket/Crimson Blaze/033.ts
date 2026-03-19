import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Duosion"
	},

	illustrator: "Pani Kobayashi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	evolveFrom: {
		en: "Solosis"
	},

	description: {
		en: "Its brain has split into two, and the two\nhalves rarely think alike. Its actions are\nutterly unpredictable."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Psyshot"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card