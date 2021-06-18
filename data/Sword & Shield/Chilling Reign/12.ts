import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Sawsbuck",
		fr: "Haydaim"
	},

	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Deerling",
		fr: "Vivaldaim"
	},

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Winter Horn",
			fr: "Corne Hivernale"
		},

		effect: {
			en: "If you have a Stadium in play, this attack does 80 more damage.",
			fr: "Si vous avez un Stade en jeu, cette attaque inflige 80 dégâts supplémentaires."
		},

		damage: "80+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card