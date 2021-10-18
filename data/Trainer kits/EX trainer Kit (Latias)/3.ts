import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	set: Set,

	name: {
		en: "Delcatty"
	},

	illustrator: "Midori Harada",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Scratch"
		},

		damage: 30
	}, {
		name: {
			en: "Ultra Energy Source"
		},

		damage: "10×",

		effect: {
			en: "Does 10 damage times the number of basic Energy cards attached to all of the Active Pokémon (both yours and your opponent’s)."
		}
	}]
}

export default card