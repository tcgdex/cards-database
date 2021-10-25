import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Bunnelby"
	},

	illustrator: "sowsow",
	rarity: "None",
	category: "Pokemon",
	dexId: [659],
	hp: 40,
	types: ["Colorless"],

	description: {
		en: "It excels at digging holes. Using its ears, it can dig a nest 33 feet deep in one night."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Mad Party"
		},

		effect: {
			en: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack."
		},

		damage: "20×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card