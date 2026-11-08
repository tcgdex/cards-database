import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [137],

	name: {
		'en-us': "Porygon"
	},

	illustrator: "Hisao Nakamura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "State-of-the-art technology was used to create\nPorygon. It was the first artificial Pokémon to be\ncreated via computer programming."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Stiffen"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes −20 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card