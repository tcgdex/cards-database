import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Mismagius"
	},

	illustrator: "NC Empire",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Misdreavus"
	},

	description: {
		en: "Its cries sound like incantations to torment the\nfoe. It appears where you least expect it."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Spooky Shot"
		},

		damage: 70,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card