import { Card } from "models/database/card"
import Set from "../My First Battle"

const card: Card = {
	dexId: [44],
	set: Set,

	name: {
		'en-us': "Gloom",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Mega Drain",
		},

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
		},

		damage: 60
	}],

	variants: [
		{
			type: "normal",
			stamp: ["bulbasaur"],

			thirdParty: {
				cardmarket: 741979,
				tcgplayer: 524010
			}
		},
	],

	illustrator: "Natsumi Yashida",
}

export default card