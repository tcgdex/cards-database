import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Paldean Tauros"
	},

	illustrator: "Minahamu",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		en: "When heated by fire energy, its horns can get hotter than 1,800 degrees Fahrenheit. Those gored by them will suffer both wounds and burns."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Blaze Tackle"
		},

		damage: 80,
		cost: ["Fire", "Colorless", "Colorless"],

		effect: {
			en: "This Pokémon also does 10 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card