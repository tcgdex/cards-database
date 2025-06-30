import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Alcremie"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Milcery"
	},

	description: {
		en: "When it trusts a Trainer, it will treat them\nto berries it's decorated with cream."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sweets Overload"
		},

		damage: 40,
		cost: ["Colorless"],

		effect: {
			en: "This attack does 40 damage for each time your Pokémon used Sweets Relay during this game."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card