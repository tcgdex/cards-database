import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Mimigal",
		en: "Spinarak"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	attacks: [{
		name: {
			fr: "Suspension",
			en: "Hang Down"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			fr: "Dard",
			en: "Sting"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card