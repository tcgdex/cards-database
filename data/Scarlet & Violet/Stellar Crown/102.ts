import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [808],
	set: Set,

	name: {
		en: "Meltan",
		fr: "Meltan",
		es: "Meltan",
		it: "Meltan",
		pt: "Meltan",
		de: "Meltan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Stampede",
			fr: "Ruée",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			de: "Zertrampeln"
		},

		damage: 10
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Beam",
			fr: "Rayon",
			es: "Transmisión",
			it: "Raggio",
			pt: "Feixe",
			de: "Strahl"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785956,
				tcgplayer: 567328
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785956,
				tcgplayer: 567328
			}
		},
		{
			type: "normal",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 841265,
			}
		},
	],

	illustrator: "Yuka Morii",

}

export default card
