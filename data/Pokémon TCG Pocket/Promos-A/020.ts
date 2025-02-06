import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Haunter"
	},

	illustrator: "Mékayu",
	rarity: "None",
	category: "Pokemon",
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Surprise Attack"
		},

		cost: ["Psychic"],
		damage: 50,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	hp: 70,

	evolveFrom: {
		en: "Gastly"
	},

	description: {
		en: "It likes to lurk in the dark and tap shoulders<br />with a gaseous hand. Its touch causes endless<br />shuddering."
	},

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card