import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Murkrow",
		fr: "Cornèbre"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Scout",
			fr: "Espionnage"
		},

		effect: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire dévoile sa main."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Peck",
			fr: "Picpic"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
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