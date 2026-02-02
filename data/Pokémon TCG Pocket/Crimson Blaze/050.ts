import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Garbodor"
	},

	illustrator: "Aya Kusube",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Trubbish"
	},

	description: {
		en: "This Pokémon eats trash, which turns into poison\ninside its body. The main component of the\npoison depends on what sort of trash was eaten."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Acid Spray"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card