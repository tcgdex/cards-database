import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Copperajah V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	dexId: [879],
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Adamantine Press"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."
		},

		damage: 90
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			en: "Wrack Down"
		},

		damage: 180
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4
}

export default card