import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Rillaboom V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	dexId: [812],
	hp: 220,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Forest Feast"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Grass Pokémon and put them onto your Bench. Then, shuffle your deck."
		}
	}, {
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		name: {
			en: "Wood Hammer"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself."
		},

		damage: 220
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card