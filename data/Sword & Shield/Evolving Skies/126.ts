import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Teddiursa",
		fr: "Teddiursa",
		es: "Teddiursa",
		it: "Teddiursa",
		pt: "Teddiursa",
		de: "Teddiursa"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "Mizue",

	attacks: [{
		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			pt: "Scratch",
			de: "Kratzer"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	dexId: [216],

	description: {
		en: "Before food becomes scarce in wintertime, its habit is to hoard food in many hidden locations."
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 574180
	}
}

export default card