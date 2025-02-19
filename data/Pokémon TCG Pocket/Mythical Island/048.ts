import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Stonjourner"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		en: "The elemental composition of the rocks that form its body were found to match the bedrock of a land far away from this Pokémon's habitat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mega Kick"
		},

		damage: 90,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond"
}

export default card
