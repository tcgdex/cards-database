import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Growlithe"
	},


	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Heat Tackle"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		},

		damage: "100"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "An ancient picture scroll shows that people were captivated by its movement as it ran through prairies.",
	}
}

export default card
