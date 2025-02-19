import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Purugly"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		en: "Glameow"
	},

	description: {
		en: "It would claim another Pokémon's nest as its own if it finds a nest sufficiently comfortable."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Interrupt"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Your opponent reveals their hand. Choose a card you find there and shuffle it into your opponent's deck."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card
