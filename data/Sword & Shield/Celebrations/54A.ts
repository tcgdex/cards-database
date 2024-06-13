import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [150],
	set: Set,

	name: {
		en: "Mewtwo EX"
	},

	illustrator: "Shizurow",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "X Ball"
		},

		effect: {
			en: "Does 20 damage times the amount of Energy attached to this Pokémon and the Defending Pokémon."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Psydrive"
		},

		effect: {
			en: "Discard an Energy attached to this Pokémon."
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card
