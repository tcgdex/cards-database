import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Tropius"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		en: "It lives in tropical jungles. The bunch of fruit\naround its neck is delicious. The fruit grows\ntwice a year."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Cutting Wind"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card