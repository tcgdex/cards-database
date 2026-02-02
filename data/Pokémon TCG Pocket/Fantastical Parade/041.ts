import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Amaura"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Sail Fossil"
	},

	description: {
		en: "Amaura is an ancient Pokémon that has gone\nextinct. Specimens of this species can sometimes\nbe found frozen in ice."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Aurora Beam"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card