import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [643],
	set: Set,

	name: {
		en: "Reshiram"
	},

	illustrator: "5ban Graphics",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Outrage"
		},

		effect: {
			en: "Does 10 more damage for each damage counter on this Pokémon."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Blue Flare"
		},

		effect: {
			en: "Discard 2 Fire Energy attached to this Pokémon."
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,

	description: {
		en: "This Pokémon appears in legends. It sends flames into the air from its tail, burning up everything around it."
	}
}

export default card
