import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Raikou"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		en: "The rain clouds it carries let it fire thunderbolts\nat will. They say that it descended with lightning."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Thunder"
		},

		damage: 70,
		cost: ["Lightning", "Colorless"],

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card