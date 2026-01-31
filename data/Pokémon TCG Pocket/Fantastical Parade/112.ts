import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Mawile"
	},

	illustrator: "kurumitsu",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		en: "It chomps with its gaping mouth. Its huge jaws are\nactually steel horns that have been transformed."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Cavernous Chomp"
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card