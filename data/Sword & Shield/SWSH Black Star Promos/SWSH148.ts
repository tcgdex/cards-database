import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [715],
	set: Set,

	name: {
		en: "Noivern V"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Boomburst"
		},

		effect: {
			en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}, {
		cost: ["Psychic", "Darkness"],

		name: {
			en: "Synchro Loud"
		},

		damage: "60+",

		effect: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 120 more damage."
		}
	}],

	regulationMark: "E",
	suffix: "V",

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	hp: 200,
	types: ["Dragon"]
}

export default card
