import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Flareon"
	},

	illustrator: "You Iribi",
	rarity: "None",
	category: "Pokemon",
	dexId: [136],
	hp: 110,
	types: ["Fire"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "Once it has stored up enough heat, this Pokémon's body temperature can reach up to 1,700 degrees Fahrenheit."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Singe"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Kindle"
		},

		effect: {
			en: "Discard an Energy from this Pokémon. If you do, discard an Energy from your opponent's Active Pokémon."
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card