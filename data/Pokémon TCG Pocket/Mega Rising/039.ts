import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Darumaka",
		fr: "Darumarond"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [554],
	hp: 70,
	types: ["Fire"],

	description: {
		en: "This popular symbol of good fortune will never\nfall over in its sleep, no matter how it's pushed\nor pulled."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente"
		},

		damage: 50,
		cost: ["Fire", "Fire"],

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card