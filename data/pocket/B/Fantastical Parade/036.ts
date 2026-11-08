import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [260],

	name: {
		'en-us': "Mega Swampert ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Marshtomp"
	},

	description: {
		'en-us': "Its arms are hard as rock. With one swing, it can\nbreak an enormous boulder into pieces."
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Strong-Armed Destroyer"
		},

		damage: 150,
		cost: ["Water", "Water", "Water"],

		effect: {
			'en-us': "Discard 2 random Energy from among the Energy attached to all Pokémon (both yours and your opponent's)."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card