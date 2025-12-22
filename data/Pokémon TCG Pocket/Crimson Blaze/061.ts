import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Staraptor"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Staravia"
	},

	description: {
		en: "It never stops attacking even if it is injured.\nIt fusses over the shape of its comb."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Hurricane Wing"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip 4 coins. This attack does 50 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card