import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Medicham"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
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
			en: "Kick Shot"
		},

		damage: 80,
		cost: ["Fighting"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card