import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Starmie"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Staryu"
	},


	attacks: [{
		cost: ["Water"],

		name: {
			en: "Wave Splash"
		},

		damage: "40"
	}],

	retreat: 0,
	rarity: "Two Diamond"
}

export default card
