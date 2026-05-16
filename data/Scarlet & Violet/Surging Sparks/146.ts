import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [288],
	set: Set,

	name: {
		en: "Vigoroth",
		fr: "Vigoroth",
		es: "Vigoroth",
		it: "Vigoroth",
		pt: "Vigoroth",
		de: "Muntier"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		en: "Slakoth",
		fr: "Parecool",
		es: "Slakoth",
		it: "Slakoth",
		pt: "Slakoth",
		de: "Bummelz"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Slashing Claw",
			fr: "Griffe Taillante",
			es: "Garra Cuchillazo",
			it: "Artigli Laceranti",
			pt: "Garra Cortadora",
			de: "Schlitzende Klaue"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794519,
				tcgplayer: 590088
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794519,
				tcgplayer: 590088
			}
		},
	],

	illustrator: "Kurata So",

}

export default card
