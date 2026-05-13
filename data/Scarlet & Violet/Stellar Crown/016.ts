import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [920],
	set: Set,

	name: {
		en: "Lokix",
		fr: "Gambex",
		es: "Lokix",
		it: "Lokix",
		pt: "Lokix",
		de: "Lextremo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	evolveFrom: {
		en: "Nymble",
		fr: "Lilliterelle",
		es: "Nymble",
		it: "Nymble",
		pt: "Nymble",
		de: "Micrick"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spiral Kick",
			fr: "Coup'd Pied en Spirale",
			es: "Patada Espiral",
			it: "Spiralcalcio",
			pt: "Chute Espiral",
			de: "Drehtritt"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785869,
				tcgplayer: 567242
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785869,
				tcgplayer: 567242
			}
		},
	],

	illustrator: "akagi",

}

export default card
