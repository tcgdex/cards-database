import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "When it is angered, it immediately discharges the<br />energy stored in the pouches in its cheeks."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spark"
		},

		damage: 10,
		cost: ["Lightning"],

		effect: {
			en: "This attack also does 10 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card