import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "sui",
	category: "Pokemon",

	dexId: [594],

	description: {
		en: "Floating in the open sea is how they live. When they find a wounded Pokémon, they embrace it and bring it to shore."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pound"
		},

		damage: 20
	}, {
		name: {
			en: "Wave Splash"
		},

		damage: 60
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Alomomola"
	},

	rarity: "None",
	hp: 100,
	types: ["Water"],

	thirdParty: {
		tcgplayer: 83507
	}
}

export default card