import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [699],

	name: {
		'en-us': "Aurorus"
	},

	illustrator: "sui",
	rarity: "One Star",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Amaura"
	},

	description: {
		'en-us': "When gripped by rage, Aurorus will emanate\nfreezing air, covering everything around it in ice."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Hail Prison"
		},

		damage: 90,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			'en-us': "Discard Water2 {W} Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 3
}

export default card