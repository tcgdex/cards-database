import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Dragalge",
		fr: "Kravarech"
	},

	illustrator: "5ban Graphics",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [691],
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Skrelp"
	},

	description: {
		en: "Using a liquid poison, Dragalge indiscriminately\nattacks anything that wanders into its territory.\nThis poison can corrode the undersides of boats.",
		fr: "Il attaque tout intrus pénétrant sur son territoire avec un poison si puissant qu'il est capable de dissoudre la coque des bateaux."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sludge Bomb",
			fr: "Bombe Beurk"
		},

		damage: 70,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card