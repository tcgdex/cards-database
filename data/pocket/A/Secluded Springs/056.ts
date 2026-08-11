import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Farfetch'd",
		'fr-fr': "Canarticho"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [83],
	hp: 70,
	types: ["Colorless"],

	description: {
		'en-us': "The stalk this Pokémon carries in its wings serves\nas a sword to cut down opponents. In a dire\nsituation, the stalk can also serve as food.",
		'fr-fr': "Il tranche ses adversaires avec sa tige, qu'il manie comme une épée. Quand la situation l'exige, il s'en nourrit."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Leek Slam",
			'fr-fr': "Poireau Castagne"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card