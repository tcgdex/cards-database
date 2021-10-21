import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Jolteon V"
	},

	rarity: "None",
	hp: 190,
	types: ["Lightning"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Thunder Spear"
		},

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Pin Missile"
		},

		damage: "60×",

		effect: {
			en: "Flip 4 coins. This attack does 60 damage for each heads."
		}
	}],

	regulationMark: "E",
	suffix: "V"
}

export default card
