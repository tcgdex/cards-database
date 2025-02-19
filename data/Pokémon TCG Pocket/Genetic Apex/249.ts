import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Porygon"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Data Scan"
		},

		effect: {
			en: "Once during your turn, you may look at the top card of your deck."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sharpen"
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "One Star",
	boosters: [Mewtwo]
}

export default card
