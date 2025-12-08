import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Kouki Saitou",
	category: "Pokemon",

	description: {
		en: "The energy made in its cheeks’ electric pouches is stored inside its membranes and released while it is gliding."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Thundershock"
		},

		damage: 10,

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
		}
	}, {
		name: {
			en: "Acrobatics"
		},

		damage: "10+",

		effect: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Emolga"
	},

	rarity: "None",
	hp: 70,
	types: ["Lightning"],

	thirdParty: {
		tcgplayer: 85193
	}
}

export default card
