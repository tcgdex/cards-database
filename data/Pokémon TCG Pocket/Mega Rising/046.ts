import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Pyroar"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [668],
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Litleo"
	},

	description: {
		en: "The mane of a male Pyroar heats up to over\n3,600 degrees Fahrenheit during battle. Merely\napproaching it will cause severe burns."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fire Blast"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "Discard 2 {R} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-blaziken"]
}

export default card