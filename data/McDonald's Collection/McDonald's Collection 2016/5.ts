import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	description: {
		en: "It is small but rough and tough. It won’t hesitate to take a bite out of anything that moves."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fury Strikes"
		},

		damage: "10×",

		effect: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads."
		}
	}],

	name: {
		en: "Totodile"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275061
	}
}

export default card
