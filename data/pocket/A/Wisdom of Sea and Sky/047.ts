import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [159],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Totodile"
	},

	description: {
		'en-us': "If it loses a fang, a new one grows back in its\nplace. There are always 48 fangs lining its mouth.",
		'fr-fr': "Quand il perd un croc, il en repousse un autre. Sa bouche est en permanence composée de 48 dents."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card