import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Frogadier"
	},

	illustrator: "5ban Graphics",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		en: "Froakie"
	},

	description: {
		en: "Its swiftness is unparalleled.\nIt can scale a tower of more\nthan 2,000 feet in a minute's time."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bounce"
		},

		damage: 40,
		cost: ["Water", "Water"],

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card