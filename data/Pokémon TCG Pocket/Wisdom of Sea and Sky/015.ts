import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Jumpluff"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Skiploom"
	},

	description: {
		en: "Jumpluff travels on seasonal winds. Once its\ncotton spores run out, its journey ends, as does\nits life."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fluffy Flight"
		},

		effect: {
			en: "Your Active Pokémon has no Retreat Cost."
		}
	}],

	attacks: [{
		name: {
			en: "Spinning Attack"
		},

		damage: 60,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card