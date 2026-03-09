import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Morelull",
		fr: "Spododo"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [755],
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "It scatters spores that flicker and glow. Anyone\nseeing these lights falls into a deep slumber.",
		fr: "Il répand des spores luminescentes qui clignotent autour de lui. Quiconque aperçoit ces lumières tombe dans un sommeil profond."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Hook",
			fr: "Crochet"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card