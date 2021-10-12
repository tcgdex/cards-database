import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "Dark Gyarados"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Ice Beam"
		},

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
		},

		damage: 30,
		cost: ["Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Grass",
		value: ""
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card