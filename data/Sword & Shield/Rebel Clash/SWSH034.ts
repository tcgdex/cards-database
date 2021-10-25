import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Zamazenta"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	dexId: [889],
	hp: 130,
	types: ["Metal"],

	description: {
		en: "Its ability to deflect any attack led to it being known as the Fighting Master's Shield. It was feared and respected by all."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sturdy Shield"
		},

		effect: {
			en: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			en: "Headbang"
		},

		damage: 130
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