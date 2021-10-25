import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Zacian"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	dexId: [888],
	hp: 130,
	types: ["Metal"],

	description: {
		en: "Now armed with a weapon it used in ancient times, this Pokémon needs only a single strike to fell even Gigantamax Pokémon."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Crunch"
		},

		effect: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon."
		},

		damage: 60
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			en: "Metal Blade"
		},

		effect: {
			en: "Discard 3 Energy from this Pokémon."
		},

		damage: 190
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2
}

export default card