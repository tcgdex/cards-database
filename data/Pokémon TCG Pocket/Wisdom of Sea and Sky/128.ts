import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Klinklang"
	},

	illustrator: "Akira Komayama",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		en: "Klang"
	},

	description: {
		en: "From its spikes, it launches powerful blasts of\nelectricity. Its red core contains an enormous\namount of energy."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Gear Spinner"
		},

		damage: 70,
		cost: ["Metal", "Metal", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon's Gear Spinner attack does +70 damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["ho-oh"]
}

export default card