import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Toxapex"
	},

	illustrator: "Ligton",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [748],
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Mareanie"
	},

	description: {
		en: "Toxapex gets into fierce battles with Bruxish over\nareas where warm ocean currents flow, but the\nodds are always against it."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Venoshock"
		},

		damage: 50,
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 70 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card