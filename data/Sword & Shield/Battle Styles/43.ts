import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Bruxish",
		fr: "Denticrisse"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Surf",
			fr: "Surf"
		},

		damage: 110,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card