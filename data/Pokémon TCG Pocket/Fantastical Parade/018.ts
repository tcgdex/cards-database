import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Marowak"
	},

	illustrator: "Dsuke",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		en: "Cubone"
	},

	description: {
		en: "The cursed flames that light up the bone carried\nby this Pokémon are said to cause both mental\nand physical pain that will never fade."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fiery Bone"
		},

		damage: 40,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Your opponent's Active Pokémon is now Burned."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card