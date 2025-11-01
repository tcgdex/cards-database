import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Porygon",
		fr: "Porygon"
	},

	illustrator: "ryoma uratsuka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "State-of-the-art technology was used to create\nPorygon. It was the first artificial Pokémon to be\ncreated via computer programming.",
		fr: "C'est le premier Pokémon au monde à avoir été créé à partir de programmes informatiques, grâce à une technologie de pointe."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card