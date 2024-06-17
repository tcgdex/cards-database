import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [136],
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
		en: "Flareon V"
	},

	rarity: "None",
	hp: 210,
	types: ["Fire"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flaming Breath"
		},

		damage: 20,

		effect: {
			en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Scorching Column"
		},

		damage: 120,

		effect: {
			en: "Your opponent's Active Pokémon is now Burned."
		}
	}],

	regulationMark: "E",
	suffix: "V"
}

export default card
