import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoqueen"
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	stage: "Stage2",
	evolveFrom: {
		en: "Nidorina"
	},

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Lovestrike"
		},

		effect: {
			en: "This attack does 50 more damage for each of your Benched Nidoking"
		},

		damage: "80+"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Star",

	description: {
		en: "Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.",
	}
}

export default card
