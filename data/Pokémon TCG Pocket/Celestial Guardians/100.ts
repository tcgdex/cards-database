import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Lycanroc"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rockruff"
	},

	description: {
		en: "Lycanroc attacks its prey with its sharp claws and fangs. It loyally obeys the instructions of a Trainer it trusts."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Crunch"
		},

		damage: 80,
		cost: ["Fighting", "Fighting", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card