import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [819],
	set: Set,

	name: {
		en: "Skwovet",
		fr: "Rongourmand",
		es: "Skwovet",
		it: "Skwovet",
		pt: "Skwovet",
		de: "Raffel"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
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

		damage: 20
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674159,
				tcgplayer: 284078
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674159,
				tcgplayer: 284078
			}
		},
	],
}

export default card
