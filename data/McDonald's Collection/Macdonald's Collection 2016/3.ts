import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",

	description: {
		en: "Eating a twig fills it with energy, and its roomy ears give vent to air hotter than 390 degrees Fahrenheit."
	},
	

	types: ["Fire",],

	stage: "Basic",

	attacks: [{
		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet"
		},

		damage: 20
	}],

	name: {
		en: "Fennekin",
		fr: "Feunnec"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275059
	}
}

export default card