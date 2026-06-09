import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Golurk"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [623],
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Golett"
	},

	description: {
		en: "There's a theory that inside Golurk is a perpetual\nmotion machine that produces limitless energy,\nbut this belief hasn't been proven."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Heavy Rocket"
		},

		damage: 60,
		cost: ["Fighting", "Fighting"],

		effect: {
			en: "Reveal the top 3 cards of your deck. This attack does 60 damage for each Pokémon with a Retreat Cost of 3 or more you find there. Shuffle the revealed cards back into your deck."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-blaziken"]
}

export default card