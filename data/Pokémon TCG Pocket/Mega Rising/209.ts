import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Rookidee"
	},

	illustrator: "OKACHEKE",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "The females are fussier than the males. If another\ncreature dirties a female Rookidee's wings, it'll\npeck the offender relentlessly in a burning rage."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flap"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card