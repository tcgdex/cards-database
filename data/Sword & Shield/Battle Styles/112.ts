import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Fearow",
		fr: "Rapasdepic"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Spearow",
		fr: "Piafabec"
	},

	attacks: [{
		name: {
			en: "Drill Peck",
			fr: "Bec Vrille"
		},

		damage: 70,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}]
}

export default card