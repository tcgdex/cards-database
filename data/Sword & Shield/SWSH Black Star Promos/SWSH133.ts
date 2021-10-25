import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Lance's Charizard V"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Flamethrower"
		},

		damage: 200,

		effect: {
			en: "Discard an Energy from this Pokémon."
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

	hp: 220,
	types: ["Fire"]
}

export default card
