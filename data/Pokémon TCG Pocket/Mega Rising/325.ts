import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Dugtrio ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [51],
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		en: "Alolan Diglett"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Triplet Headbutt"
		},

		damage: 60,
		cost: ["Metal", "Colorless"],

		effect: {
			en: "Flip 3 coins. This attack does 60 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card