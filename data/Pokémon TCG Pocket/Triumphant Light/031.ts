import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Gastly"
	},

	illustrator: "Yuu Nishida",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "It wraps its opponent in its gas-like body,<br />slowly weakening its prey by poisoning it<br />through the skin."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Astonish"
		},

		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent reveals a random card from their hand and shuffles it into their deck."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card