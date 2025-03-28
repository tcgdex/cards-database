import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Dialga"
	},

	illustrator: "akagi",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		en: "Radiant light caused Dialga to take on a form bearing a striking<br />resemblance to the creator Pokémon. Dialga now wields such<br />colossal strength that one must conclude this is its true form."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Time Mash"
		},

		damage: 100,
		cost: ["Metal", "Metal", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, during your next turn, this Pokémon can't attack."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card