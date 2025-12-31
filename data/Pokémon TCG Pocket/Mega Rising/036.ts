import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Blaziken ex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	evolveFrom: {
		en: "Combusken"
	},

	description: {
		en: "When facing a tough foe, it looses flames from\nits wrists. Its powerful legs let it jump clear over\nbuildings."
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Mega Burning"
		},

		damage: 120,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Discard Fire{R} Energy from this Pokémon. Your opponent's Active Pokémon is now Burned."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card