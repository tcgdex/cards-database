import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Rapidash"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		en: "Ponyta"
	},

	description: {
		en: "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rising Lunge"
		},

		damage: "40+",
		cost: ["Fire", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
