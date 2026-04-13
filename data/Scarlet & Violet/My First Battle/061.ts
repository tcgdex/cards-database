import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [61],
	set: Set,

	name: {
		en: "Poliwhirl",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		en: "Poliwag",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Wave Splash",
		},

		damage: 50
	}],

	variants: [
		{
			type: "normal"
		},
	],

	illustrator: "Mizue",

	thirdParty: {
		cardmarket: 742015,
		tcgplayer: 524053
	}
}

export default card