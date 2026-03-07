import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Swinub",
		fr: "Marcacrin"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [220],
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "It rubs its snout on the ground to find and dig up\nfood. It sometimes discovers hot springs.",
		fr: "Il creuse le sol avec son groin pour y dénicher de la nourriture. Il trouve parfois des sources d'eau chaude."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card