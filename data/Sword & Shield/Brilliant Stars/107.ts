import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [443],
	set: Set,

	name: {
		en: "Gible",
		fr: "Griknot",
		es: "Gible",
		it: "Gible",
		pt: "Gible",
		de: "Kaumalat"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Fighting"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			it: "Rosicchiamento",
			pt: "Roída",
			de: "Nagen"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",


	description: {
		en: "Gible prefers to stay in narrow holes in the sides of caves heated by geothermal energy. This way, Gible can stay warm even during a blizzard.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608653,
				tcgplayer: 263827
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608653,
				tcgplayer: 263827
			}
		},
	],
}

export default card
