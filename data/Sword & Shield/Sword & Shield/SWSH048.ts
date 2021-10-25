import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Centiskorch"
	},

	illustrator: "nagimiso",
	rarity: "None",
	category: "Pokemon",
	dexId: [851],
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Sizzlipede"
	},

	description: {
		en: "When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Hundred Foot Flames"
		},

		effect: {
			en: "For each Fire Energy attached to this Pokémon, discard the top card of your opponent's deck."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Searing Flame"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned."
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card