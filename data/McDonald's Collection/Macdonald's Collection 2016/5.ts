import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	description: {
		en: "It is small but rough and tough. It won’t hesitate to take a bite out of anything that moves."
	},
	

	types: ["Water",],

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fury Strikes",
			fr: "Attaques Furieuses"
		},

		damage: "10×",

		effect: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtes face."
		}
	}],

	name: {
		en: "Totodile",
		fr: "Kaiminus"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275061
	}
}

export default card