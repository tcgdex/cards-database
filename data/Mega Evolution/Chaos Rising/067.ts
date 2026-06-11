import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "Its four horns are a high-performance radar system. It uses them to sense sounds and smells, rather than using ears or a nose.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886459,
				tcgplayer: 693545
			}
		},
	],

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
}

export default card