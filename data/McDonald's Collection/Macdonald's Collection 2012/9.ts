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
			en: "Knock Off",
			fr: "Sabotage"
		},

		damage: 20,

		effect: {
			en: "Flip a coin. If heads, discard a random card from your opponent’s hand.",
			fr: "Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Purrloin",
		fr: "Chacripan"
	},

	rarity: "None",
	hp: 60,
	types: ["Darkness"],

	thirdParty: {
		tcgplayer: 88463
	}
}

export default card