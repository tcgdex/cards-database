import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Meowth"
	},

	illustrator: "Shigenori Negishi",
	rarity: "None",
	category: "Pokemon",
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Pay Day"
		},

		cost: ["Colorless"],
		damage: 10,

		effect: {
			en: "Draw a card."
		}
	}],

	hp: 60,

	description: {
		en: "All it does is sleep during the daytime. At night,<br />it patrols its territory with its eyes aglow."
	},

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card