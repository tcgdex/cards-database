import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Clawitzer"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Clauncher"
	},

	description: {
		en: "The cannonballs of seawater that Clawitzer\nlaunches from its claw are powerful enough to\npunch through tanker hulls."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Aqua Shower"
		},

		cost: ["Water"],

		effect: {
			en: "This attack does 20 damage to each of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card