import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Atsuko Nishida",
	category: "Pokemon",

	description: {
		en: "They steal from people for fun, but their victims can’t help but forgive them. Their deceptively cute act is perfect."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Knock Off"
		},

		damage: "20",

		effect: {
			en: "Flip a coin. If heads, discard a random card from your opponent’s hand."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Purrloin"
	},

	rarity: "None",
	hp: 60,
	types: ["Darkness"]
}

export default card