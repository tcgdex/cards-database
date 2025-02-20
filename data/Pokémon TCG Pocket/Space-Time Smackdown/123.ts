import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Garchomp"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Dragon"],

	evolveFrom: {
		en: "Gabite"
	},

	description: {
		en: "It is said that when one runs at high speed, its wings create blades of wind that can fell nearby trees."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Reckless Shearing"
		},

		effect: {
			en: "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw a card."
		}
	}],

	attacks: [{
		name: {
			en: "Dragon Claw"
		},

		damage: 100,
		cost: ["Water", "Fighting"]
	}],

	retreat: 1
}

export default card
