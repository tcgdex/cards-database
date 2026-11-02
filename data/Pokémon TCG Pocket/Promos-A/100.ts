import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Weavile",
		de: "Snibunna"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [461],
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		en: "Sneasel",
		de: "Sniebel"
	},

	description: {
		en: "Evolution made it even more devious.\nIt communicates by clawing signs in boulders.",
		de: "Snibunna wurde durch seine Entwicklung noch verschlagener. Es kommuniziert durch in Felsen gekratzte Zeichen."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Slash",
			de: "Schlitzer"
		},

		damage: 50,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 0
}

export default card