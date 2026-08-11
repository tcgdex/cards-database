import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Drapion"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [452],
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Skorupi"
	},

	description: {
		en: "It's so vicious that it's called the Sand Demon.\nYet when confronted by Hippowdon, Drapion\nkeeps a low profile and will never pick a fight."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Stun Poison"
		},

		damage: 50,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned and Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card