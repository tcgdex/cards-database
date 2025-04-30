import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Crabominable ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	evolveFrom: {
		en: "Crabrawler"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Insatiable Striking"
		},

		damage: 40,
		cost: ["Water"],

		effect: {
			en: "During your next turn, this Pokémon's Insatiable Striking attack does +40 damage."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 3
}

export default card