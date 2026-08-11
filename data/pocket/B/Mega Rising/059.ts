import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Crawdaunt"
	},

	illustrator: "Shibuzoh.",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [342],
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Corphish"
	},

	description: {
		'en-us': "A brutish Pokémon that loves to battle. It will\ncrash itself into any foe that approaches its nest."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Guillotine"
		},

		damage: 90,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card