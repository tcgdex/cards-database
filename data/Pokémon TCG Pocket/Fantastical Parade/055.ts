import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Toxtricity ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		en: "Toxel"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Damaging Spark"
		},

		damage: 90,
		cost: ["Lightning", "Lightning", "Colorless"],

		effect: {
			en: "This attack also does 30 damage to each of your opponent's Benched Pokémon that has damage on it."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card