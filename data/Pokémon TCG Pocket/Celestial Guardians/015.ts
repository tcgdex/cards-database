import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Lurantis"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Fomantis"
	},

	description: {
		en: "By masquerading as a bug Pokémon, it lowers the guard of actual bug Pokémon lured in by a scent of sweet flowers. Its sickles bring them down."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Petal Blizzard"
		},

		cost: ["Grass"],

		effect: {
			en: "This attack does 20 damage to each of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card