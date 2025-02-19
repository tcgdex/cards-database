import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Staraptor"
	},

	illustrator: "Ryota Murayama",
	rarity: "One Star",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Staravia"
	},

	description: {
		en: "When Staravia evolve into Staraptor, they leave<br />the flock to live alone. They have sturdy wings."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Clutch"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
		
	boosters: [Palkia]
}

export default card