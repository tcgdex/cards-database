import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [126],
	set: Set,

	name: {
		en: "Magmar",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Flare",
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Magma Punch",
		},

		damage: 50
	}],

	variants: [
		{
			type: "normal"
		},
	],

	illustrator: "Ryuta Fuse",

	thirdParty: {
		cardmarket: 741994,
		tcgplayer: 524097
	}
}

export default card