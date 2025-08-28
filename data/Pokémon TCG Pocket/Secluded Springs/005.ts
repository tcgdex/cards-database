import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Sunflora"
	},

	illustrator: "Miki Tanaka",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Sunkern"
	},

	description: {
		en: "In the daytime, it rushes about in a hectic\nmanner, but it comes to a complete stop when\nthe sun sets."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Trip Over"
		},

		damage: 50,
		cost: ["Grass", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card