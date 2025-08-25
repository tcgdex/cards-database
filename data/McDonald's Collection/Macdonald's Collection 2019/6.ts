import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	description: {
		en: "A plan was recently announced to gather many Pikachu and make an electric power plant."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Iron Tail"
		},

		damage: "20×",

		effect: {
			en: "Flip a coin until you get tails. This attack does 20 damage for each heads."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Pikachu"
	},

	rarity: "None",
	hp: 60,
	types: ["Lightning"],

	thirdParty: {
		tcgplayer: 200967
	}
}

export default card