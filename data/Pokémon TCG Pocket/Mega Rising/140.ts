import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Crabominable"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Crabrawler"
	},

	description: {
		en: "Though its punches are powerful, this Pokémon's\nmovements are sluggish. It blows icy bubbles\nfrom its mouth to immobilize its opponents."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Last-Chance Punch"
		},

		damage: 30,
		cost: ["Fighting"],

		effect: {
			en: "If this Pokémon's remaining HP is 30 or less, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3
}

export default card