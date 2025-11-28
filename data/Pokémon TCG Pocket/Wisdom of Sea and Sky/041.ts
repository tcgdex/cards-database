import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Horsea",
		fr: "Hypotrempe"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [116],
	hp: 50,
	types: ["Water"],

	description: {
		en: "Horsea makes its home in oceans with gentle\ncurrents. If this Pokémon is under attack, it spits\nout pitch-black ink and escapes.",
		fr: "Il vit dans les mers calmes. Quand on l'attaque, il crache de l'encre noire et profite de la diversion pour s'enfuir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Hook",
			fr: "Crochet"
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card