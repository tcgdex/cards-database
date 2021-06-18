import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Ledyba",
		fr: "Coxy"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Collect",
			fr: "Collecte"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Punch",
			fr: "Koud’Poing"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card