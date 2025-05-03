import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Chewtle"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		en: "Its large front tooth is still growing in. When the tooth itches, this Pokémon will bite another Chewtle's horn, and the two Pokémon will tussle."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card
