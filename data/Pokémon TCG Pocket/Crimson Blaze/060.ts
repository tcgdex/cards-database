import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Staravia"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Starly"
	},

	description: {
		en: "They maintain huge flocks, although fierce\nscuffles break out between various flocks."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Quick Attack"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card