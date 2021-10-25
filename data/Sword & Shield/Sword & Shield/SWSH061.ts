import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "None",
	category: "Pokemon",
	dexId: [25],
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Charge"
		},

		effect: {
			en: "Search your deck for up to 2 Lightning Energy cards and attach them to this Pokémon. Then, shuffle your deck."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunderbolt"
		},

		effect: {
			en: "Discard all Energy from this Pokémon."
		},

		damage: 200
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card