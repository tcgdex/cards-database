import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Vaporeon"
	},

	illustrator: "so-taro",
	rarity: "None",
	category: "Pokemon",
	dexId: [134],
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "When Vaporeon's fins begin to vibrate, it is a sign that rain will come within a few hours."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Watery Shroud"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's)."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hydro Pump"
		},

		effect: {
			en: "This attack does 20 more damage for each Water Energy attached to this Pokémon."
		},

		damage: "60+"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card