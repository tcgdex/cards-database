import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dewgong"
	},

	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Surf"
		},

		damage: "90"
	}],

	retreat: 3,
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Seel",
		fr: "Otaria",
		es: "Seel",
		it: "Seel",
		pt: "Seel",
		de: "Jurob"
	}
}

export default card
