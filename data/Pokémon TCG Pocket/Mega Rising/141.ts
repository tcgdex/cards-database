import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Stufful"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [759],
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "The way it protects itself by flailing its arms may\nbe an adorable sight, but stay well away. This is\nflailing that can snap thick tree trunks."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Magnum Punch"
		},

		damage: 40,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-blaziken"]
}

export default card