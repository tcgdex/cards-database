import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Azumarill"
	},

	illustrator: "miki kudo",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Marill"
	},

	description: {
		en: "Its long ears are superb sensors. It can distinguish<br />the movements of things in water and tell what<br />they are."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Waterfall"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card