import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Klefki"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		en: "Once it absorbs a key's metal ions, it discards the key without a second thought. However, it will hang on to keys it favors for decades."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Unlock"
		},

		damage: 10,
		cost: ["Metal"],

		effect: {
			en: "Draw a card."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card