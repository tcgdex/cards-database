import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh"
	},

	illustrator: "Ryota Murayama",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [250],
	hp: 120,
	types: ["Fire"],

	description: {
		en: "It will reveal itself before a pure-hearted Trainer by\nshining its bright, rainbow-colored wings."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Blessed Burn",
			fr: "Brûlure Bénie"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		effect: {
			en: "Heal 30 damage from each of your Benched Basic Pokémon.",
			fr: "Soignez 30 dégâts de chacun de vos Pokémon de base de Banc."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-blaziken"]
}

export default card