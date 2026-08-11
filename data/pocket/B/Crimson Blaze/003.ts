import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [3],

	name: {
		'en-us': "Venusaur"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Ivysaur"
	},

	description: {
		'en-us': "A bewitching aroma wafts from its flower.\nThe fragrance becalms those engaged\nin a battle."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Poisonous Whip"
		},

		damage: 90,
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card