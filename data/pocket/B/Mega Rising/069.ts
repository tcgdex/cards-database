import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jellicent"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [593],
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Frillish"
	},

	description: {
		'en-us': "Whenever a full moon hangs in the night sky,\nschools of Jellicent gather near the surface of\nthe sea, waiting for their prey to appear."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Bouncy Body"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, take a {W} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Surf"
		},

		damage: 60,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card