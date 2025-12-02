import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Miki Tanaka",
	category: "Pokemon",

	dexId: [56],

	description: {
		en: "It can spontaneously become enraged. Everyone near it clears out as it rampages and the resulting loneliness makes it angrier still."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Three-Step Strike"
		},

		damage: "10×",

		effect: {
			en: "Flip 3 coins. This attack does 10 damage for each heads."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Mankey"
	},

	rarity: "None",
	hp: 50,
	types: ["Fighting"],

	thirdParty: {
		tcgplayer: 200971
	}
}

export default card