import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Sliggoo",
		fr: "Colimucus",
		es: "Sliggoo",
		'es-mx': "Sliggoo",
		de: "Viscargot",
		it: "Sliggoo",
		pt: "Sliggoo"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [705],
	hp: 90,
	types: ["Dragon"],

	evolveFrom: {
		en: "Goomy"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			'es-mx': "Cachetadita",
			de: "Sanfter Hieb",
			it: "Schiaffetto",
			pt: "Tapinha"
		},

		cost: ["Water", "Psychic"],
		damage: 70
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693545
	}
}

export default card