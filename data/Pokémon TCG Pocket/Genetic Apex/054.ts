import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Wartortle"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Wave Splash"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Squirtle",
		fr: "Carapuce",
		es: "Squirtle",
		it: "Squirtle",
		pt: "Squirtle",
		de: "Schiggy"
	}
}

export default card
