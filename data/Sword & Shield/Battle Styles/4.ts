import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Cacnea",
		fr: "Cacnea"
	},

	illustrator: "Kazuma Koda",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Zzzt",
			fr: "Bzzz"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Beat",
			fr: "Bataille"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card