import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Akira Komayama",
	category: "Pokemon",

	dexId: [129],

	description: {
		en: "In the distant past, it was somewhat stronger than the horribly weak descendants that exist today."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Epic Splash"
		},

		damage: 30,

		effect: {
			en: "Flip 2 coins. If either of them is tails, this attack does nothing."
		}
	}],

	name: {
		en: "Magikarp"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275060
	}
}

export default card