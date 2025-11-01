import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoran♂",
		fr: "Nidoran♂"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "The horn on a male Nidoran's forehead contains\na powerful poison. This is a very cautious\nPokémon, always straining its large ears.",
		fr: "Sa corne frontale contient un puissant poison. Les grandes oreilles de ce Pokémon très prudent sont constamment dressées."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Peck",
			fr: "Picpic"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card