import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Spearow",
		fr: "Piafabec"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Peck",
			fr: "Picpic"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card