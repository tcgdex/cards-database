import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

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
		en: "Once it absorbs a key's metal ions, it discards the\nkey without a second thought. However, it will\nhang on to keys it favors for decades."
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