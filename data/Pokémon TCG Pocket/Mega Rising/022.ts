import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Gogoat"
	},

	illustrator: "sowsow",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Skiddo"
	},

	description: {
		en: "These Pokémon live in herds in mountainous\nplaces. The victor in their contests of clashing\nhorns will become the leader of the herd."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Double-Edge"
		},

		damage: 100,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card