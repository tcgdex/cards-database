import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Litten"
	},

	illustrator: "whomor Inc.",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [725],
	hp: 60,
	types: ["Fire"],

	description: {
		en: "If you try too hard to get close to it, it won't\nopen up to you. Even if you do grow close,\ngiving it too much affection is still a no-no."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Heat Tackle"
		},

		damage: 30,
		cost: ["Fire"],

		effect: {
			en: "This Pokémon also does 10 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-gyarados"]
}

export default card