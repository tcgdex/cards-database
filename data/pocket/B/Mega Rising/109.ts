import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chingling"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [433],
	hp: 30,
	types: ["Psychic"],

	description: {
		'en-us': "There is an orb inside its mouth. When it hops,\nthe orb bounces all over and makes a\nringing sound."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Jingly Noise"
		},

		damage: 10,

		effect: {
			'en-us': "During your opponent's next turn, they can't play any Item cards from their hand."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card