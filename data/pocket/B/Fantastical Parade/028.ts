import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [37],

	name: {
		'en-us': "Alolan Vulpix"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "In hot weather, this Pokémon makes ice shards\nwith its six tails and sprays them around to cool\nitself off."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Gnaw"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card