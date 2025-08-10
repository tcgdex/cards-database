import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Bouffalant"
	},

	illustrator: "nagimiso",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		en: "These Pokémon can crush a car with no more\nthan a headbutt. Bouffalant with more hair on\ntheir heads hold higher positions within the herd."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Continuous Headbutt"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin until you get tails. This attack does 70 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh", "lugia"]
}

export default card