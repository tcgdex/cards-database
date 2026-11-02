import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Golduck",
		fr: "Akwakwak"
	},

	illustrator: "Hasuno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [55],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak"
	},

	description: {
		en: "It swims gracefully along on the quiet, slow-\nmoving rivers and lakes of which it is so fond."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague"
		},

		damage: 50,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card