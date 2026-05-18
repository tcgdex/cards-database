import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [919],
	set: Set,

	name: {
		en: "Nymble",
		fr: "Lilliterelle",
		es: "Nymble",
		it: "Nymble",
		pt: "Nymble",
		de: "Micrick"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			it: "Rosicchiamento",
			pt: "Roída",
			de: "Nagen"
		},

		damage: 10
	}],

	retreat: 0,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740489,
				tcgplayer: 523612,
				cardtrader: 265100
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740489,
				tcgplayer: 523612,
				cardtrader: 265100
			}
		},
	],

	illustrator: "Pani Kobayashi",

	
}

export default card
