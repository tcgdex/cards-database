import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Noctowl"
	},

	illustrator: "DOM",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Hoothoot"
	},

	description: {
		en: "Its eyes are specially developed to enable it to<br />see clearly even in murky darkness and minimal light."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Silent Wing"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Your opponent reveals their hand."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card