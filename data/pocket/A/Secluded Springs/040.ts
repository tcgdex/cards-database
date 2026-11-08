import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [50],
	hp: 60,
	types: ["Fighting"],

	description: {
		'en-us': "It lives about one yard underground, where it\nfeeds on plant roots. It sometimes appears\naboveground.",
		'fr-fr': "Ce Pokémon vit un mètre sous terre et se nourrit de racines. Il apparaît parfois à la surface."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card