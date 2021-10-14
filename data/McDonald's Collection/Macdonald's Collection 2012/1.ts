import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	description: {
		en: "They avoid attacks by sinking into the shadows of thick foliage. They retaliate with masterful whipping techniques."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wrap"
		},

		damage: "20",

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
		}
	}, {
		name: {
			en: "Tackle"
		},

		damage: "30"
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Servine"
	},

	rarity: "None",
	hp: 80,
	types: ["Grass"]
}

export default card