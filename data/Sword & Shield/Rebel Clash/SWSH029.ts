import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Rayquaza"
	},

	illustrator: "so-taro",
	rarity: "None",
	category: "Pokemon",
	dexId: [384],
	hp: 130,
	types: ["Colorless"],

	description: {
		en: "It flies in the ozone layer, way up high in the sky. Until recently, no one had ever seen it."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Jaw Lock"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Power Blast"
		},

		effect: {
			en: "Discard an Energy from this Pokémon."
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card