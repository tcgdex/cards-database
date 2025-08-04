import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Ampharos"
	},

	illustrator: "Kouki Saitou",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		en: "Flaaffy"
	},

	description: {
		en: "The bright light on its tail can be seen far\naway. It has been treasured since ancient\ntimes as a beacon."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Thunder Punch"
		},

		damage: 80,
		cost: ["Lightning", "Lightning"],

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage. If tails, this Pokémon also does 20 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card