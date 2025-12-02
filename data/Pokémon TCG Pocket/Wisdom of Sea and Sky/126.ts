import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Klink",
		fr: "Tic"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [599],
	hp: 60,
	types: ["Metal"],

	description: {
		en: "The two minigears that compose this Pokémon\nare closer than twins. They mesh well only with\neach other.",
		fr: "Ses deux rouages sont plus soudés que des jumeaux. Si on essaie de les combiner à d'autres rouages, ils ne s'entendent pas très bien."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Vise Grip",
			fr: "Force Poigne"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card