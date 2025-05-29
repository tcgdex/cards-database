import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Bewear"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		en: "Stufful"
	},

	description: {
		en: "Once it accepts you as a friend, it tries to show\nits affection with a hug. Letting it do that is\ndangerous—it could easily shatter your bones."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Superpowered Hug"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip 2 coins. If both of them are heads, your opponent's Active Pokémon is Knocked Out."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card