import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [53],
	set: Set,

	name: {
		en: "Persian",
		fr: "Persian",
		es: "Persian",
		it: "Persian",
		pt: "Persian",
		de: "Snobilikat"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss",
		es: "Meowth",
		it: "Meowth",
		pt: "Meowth",
		de: "Mauzi"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Lee HyunJung",

	description: {
		en: "Its elegant and refined behavior clashes with that of the barbaric Perrserker. The relationship between the two is one of mutual disdain."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Pay Day"
		},

		damage: 30,

		effect: {
			en: "Draw a card."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bite"
		},

		damage: 70
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card