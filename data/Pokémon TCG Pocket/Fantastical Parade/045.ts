import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Cramorant"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		en: "Cramorant takes advantage of Arrokuda's frantic\nthrashing to help spit Arrokuda out at high speed."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spit-Out Shot"
		},

		cost: ["Water"],

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card