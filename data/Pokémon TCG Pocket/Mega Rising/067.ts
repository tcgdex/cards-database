import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Carracosta"
	},

	illustrator: "match",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Tirtouga"
	},

	description: {
		en: "This Pokémon emerges from the water in search\nof prey despite the fact that it moves more\nslowly on land."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Blocking Shell"
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from Basic Pokémon during your opponent's next turn."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card