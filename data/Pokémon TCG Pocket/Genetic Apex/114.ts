import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Clefable"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",
	evolveFrom: {
		en: "Clefairy"
	},


	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Magical Shot"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
