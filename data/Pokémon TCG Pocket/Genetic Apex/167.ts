import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidorina"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Stage1",
	evolveFrom: {
		en: "Nidoran♀"
	},


	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Bite"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "The horn on its head has atrophied. It's thought that this happens so Nidorina's children won't get poked while their mother is feeding them.",
	}
}

export default card
