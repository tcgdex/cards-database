import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Minun"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "Its dislike of water makes it take shelter under\nthe eaves of houses in rain. It uses pom-poms\nmade of sparks for cheering."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Buddy Spark"
		},

		damage: 30,
		cost: ["Lightning"],

		effect: {
			en: "If Plusle is on your Bench, this attack also does 10 damage to each of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card