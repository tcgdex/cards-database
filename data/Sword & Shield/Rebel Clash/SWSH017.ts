import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Toxtricity V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	dexId: [849],
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Energize"
		},

		effect: {
			en: "Attach a Lightning Energy card from your discard pile to this Pokémon."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Venom Slap"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card