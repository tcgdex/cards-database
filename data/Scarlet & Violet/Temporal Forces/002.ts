import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [204],
	set: Set,

	name: {
		en: "Pineco",
		fr: "Pomdepik",
		es: "Pineco",
		it: "Pineco",
		pt: "Pineco",
		de: "Tannza"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760632,
				tcgplayer: 542647
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760632,
				tcgplayer: 542647
			}
		},
	],

	illustrator: "Midori Harada",

}

export default card