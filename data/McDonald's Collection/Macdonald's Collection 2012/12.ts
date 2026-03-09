import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Atsuko Nishida",
	category: "Pokemon",

	description: {
		en: "They use their tusks to crush the berries they eat. Repeated regrowth makes their tusks strong and sharp."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dual Chop",
			fr: "Double Baffe"
		},

		damage: "10×",

		effect: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Axew",
		fr: "Coupenotte"
	},

	rarity: "None",
	hp: 60,
	types: ["Colorless"],

	thirdParty: {
		tcgplayer: 83673
	}
}

export default card