import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Shinx",
		fr: "Lixy"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [403],
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "The extension and contraction of its muscles\ngenerates electricity. It glows when in trouble.",
		fr: "Ses muscles génèrent un courant électrique lorsqu'ils travaillent. Il s'illumine en cas de danger."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card