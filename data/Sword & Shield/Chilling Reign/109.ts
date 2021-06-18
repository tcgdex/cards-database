import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Aron",
		fr: "Galekid"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Gnaw",
			fr: "Ronge"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé"
		},

		damage: 50,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card