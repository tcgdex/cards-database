import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Persian"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Alolan Meowth"
	},

	description: {
		en: "The round face of Alolan Persian is considered\nto be a symbol of prosperity in the Alola region,\nso these Pokémon are very well cared for."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fake Out"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card