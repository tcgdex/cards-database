import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Dark Sylveon V"
	},

	illustrator: "Ryuta Fuse",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Disarming Voice"
		},

		damage: 30,

		effect: {
			en: "Your opponent's Active Pokémon is now Confused."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Tricky Ribbon"
		},

		damage: 100,

		effect: {
			en: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck."
		}
	}],

	regulationMark: "E",
	suffix: "V",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	hp: 180,
	types: ["Psychic"]
}

export default card
