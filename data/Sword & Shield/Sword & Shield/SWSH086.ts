import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Cramorant V"
	},

	illustrator: "aky CG Works",
	rarity: "None",
	category: "Pokemon",
	dexId: [845],
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Beak Catch"
		},

		effect: {
			en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Spit Shot"
		},

		effect: {
			en: "Discard all Energy from this Pokémon. This attack does 160 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card