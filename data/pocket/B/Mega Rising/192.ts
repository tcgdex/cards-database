import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Exploud"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [295],
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Loudred"
	},

	description: {
		'en-us': "This Pokémon can do more than just shout. To\ncommunicate with others of its kind, it'll emit all\nsorts of sounds from the holes in its body."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Booming Roar"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, they can't play any Item cards from their hand."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card