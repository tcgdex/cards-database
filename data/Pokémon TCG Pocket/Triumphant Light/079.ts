import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Sudowoodo"
	},

	illustrator: "Yuriko Akase",
	rarity: "One Star",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "Although it always pretends to be a tree,<br />its composition appears more similar to<br />rock than to vegetation."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fighting Headbutt"
		},

		damage: 20,
		cost: ["Fighting"],

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon <strong>ex</strong>, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card