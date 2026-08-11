import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Shinx",
		'fr-fr': "Lixy"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [403],
	hp: 60,
	types: ["Lightning"],

	description: {
		'en-us': "The extension and contraction of its muscles\ngenerates electricity. It glows when in trouble.",
		'fr-fr': "Ses muscles génèrent un courant électrique lorsqu'ils travaillent. Il s'illumine en cas de danger."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
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