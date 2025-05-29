import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Medicham"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Meditite"
	},

	description: {
		en: "Through yoga training, it gained the psychic<br />power to predict its foe's next move."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "High Jump Kick"
		},

		damage: 50,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card