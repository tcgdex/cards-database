import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Muk ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		en: "Alolan Grimer"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Chemical Panic"
		},

		damage: 80,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			en: "1 Special Condition from among Asleep, Burned, Confused, Paralyzed, and Poisoned is chosen at random, and your opponent's Active Pokémon is now affected by that Special Condition. Any Special Conditions already affecting that Pokémon will not be chosen."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card