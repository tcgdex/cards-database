import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [996],
	set: Set,

	name: {
		fr: "Frigodo",
		en: "Frigibax",
		es: "Frigibax",
		it: "Frigibax",
		pt: "Frigibax",
		de: "Frospino"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			fr: "Charge",
			en: "Tackle",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715532,
				tcgplayer: 497468,
				cardtrader: 248645
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715532,
				tcgplayer: 497468,
				cardtrader: 248645
			}
		},
	],

	illustrator: "Akira Komayama",

	
}

export default card
