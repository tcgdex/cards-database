import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Croconaw",
		fr: "Crocrodil"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Totodile"
	},

	description: {
		en: "If it loses a fang, a new one grows back in its\nplace. There are always 48 fangs lining its mouth.",
		fr: "Quand il perd un croc, il en repousse un autre. Sa bouche est en permanence composée de 48 dents."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure"
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