import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Rotom"
	},

	illustrator: "Krgc",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "Its electricity-like body can enter some kinds of machines and take control in order to make mischief."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Assault Laser"
		},

		damage: "20+",
		cost: ["Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon has a Pokémon Tool attached, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
