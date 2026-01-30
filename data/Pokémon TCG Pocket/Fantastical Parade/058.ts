import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Ponyta"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "This Pokémon will look into your eyes and read\nthe contents of your heart. If it finds evil there,\nit promptly hides away."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flop"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card