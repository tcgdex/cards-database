import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Raticate"
	},

	illustrator: "nagimiso",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Alolan Rattata"
	},

	description: {
		en: "It has an incredibly greedy personality. Its nest is filled with so much food gathered by Rattata at its direction, it can't possibly eat it all."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Scrounge-and-Scarf"
		},

		damage: 50,
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "Discard a random Item card from your opponent's hand."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card