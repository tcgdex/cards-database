import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Staraptor"
	},

	illustrator: "Sekio",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Staravia"
	},

	description: {
		en: "When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings."
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

	retreat: 1
}

export default card
